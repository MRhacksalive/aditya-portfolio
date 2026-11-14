import { useEffect, useRef, useState } from "react";

/* Flight-tracker background.
   - Soft red glows drift slowly behind everything.
   - Airports (small dots) send out radar pings; clicking sends one from the cursor.
   - Planes follow curved routes with fading trails, in three depth layers.
     They glow when the cursor passes close.
   With reduced motion, one still frame is drawn. */

// Airport positions as viewport fractions.
const AIRPORTS = [
  [0.12, 0.22], [0.78, 0.16], [0.9, 0.62], [0.3, 0.74], [0.58, 0.9], [0.5, 0.45],
];
const GLOWS = [
  { fx: 0.5, fy: 0.5, ax: 0.42, ay: 0.3, sp: 0.05, ph: 0, a: 0.13 },
  { fx: 0.5, fy: 0.5, ax: 0.35, ay: 0.38, sp: 0.037, ph: 2.1, a: 0.1 },
  { fx: 0.5, fy: 0.5, ax: 0.45, ay: 0.25, sp: 0.062, ph: 4.2, a: 0.08 },
];

const LAYERS = [
  { scale: 0.55, alpha: 0.22, seconds: 46, count: 4 }, // far
  { scale: 1.0, alpha: 0.3, seconds: 32, count: 3 },   // mid
  { scale: 1.7, alpha: 0.38, seconds: 22, count: 2 },  // near
];

// Top-down jet, nose pointing right. Upper half; the lower half is mirrored.
const HALF = [
  [16, 0], [5, -2.2], [-3, -13], [-7.5, -13], [-4.5, -2.4],
  [-9, -1.6], [-12, -5.6], [-14.5, -5.6], [-12.5, -1], [-14, 0],
];

function newFlight(layer, startAnywhere) {
  const ltr = Math.random() < 0.5;
  const y0 = 0.05 + Math.random() * 0.9;
  const y1 = 0.05 + Math.random() * 0.9;
  const sx = ltr ? -0.12 : 1.12;
  const ex = ltr ? 1.12 : -0.12;
  const spread = (ex - sx) / 3;
  return {
    layer,
    // cubic bezier control points, in viewport fractions
    p: [
      [sx, y0],
      [sx + spread, y0 + (Math.random() - 0.5) * 0.7],
      [sx + spread * 2, y1 + (Math.random() - 0.5) * 0.7],
      [ex, y1],
    ],
    t: startAnywhere ? Math.random() : 0,
    speed: 1 / (layer.seconds * (0.85 + Math.random() * 0.3)),
  };
}

function bez(p, t, w, h) {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [
    (a * p[0][0] + b * p[1][0] + c * p[2][0] + d * p[3][0]) * w,
    (a * p[0][1] + b * p[1][1] + c * p[2][1] + d * p[3][1]) * h,
  ];
}

export default function SkyBackground() {
  const ref = useRef(null);
  const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 700;

    let w = 0, h = 0, raf = 0, last = 0;
    let mx = -9999, my = -9999;
    let clock = 0;
    const flights = [];
    const pings = [];
    const airports = AIRPORTS.slice(0, small ? 4 : AIRPORTS.length).map(([x, y]) => ({
      x, y, timer: Math.random() * 4,
    }));
    const addPing = (x, y, max) => pings.push({ x, y, age: 0, life: 3.2, max });
    LAYERS.forEach((layer) => {
      const n = small ? Math.max(1, layer.count - 1) : layer.count;
      for (let i = 0; i < n; i++) flights.push(newFlight(layer, true));
    });

    const drawPlane = (x, y, angle, s, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(s, s);
      ctx.fillStyle = color;
      ctx.beginPath();
      HALF.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
      for (let i = HALF.length - 1; i >= 0; i--) ctx.lineTo(HALF[i][0], -HALF[i][1]);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawGlows = () => {
      const big = Math.max(w, h) * 0.5;
      for (const g of GLOWS) {
        const x = w * (g.fx + g.ax * Math.sin(clock * g.sp + g.ph));
        const y = h * (g.fy + g.ay * Math.cos(clock * g.sp * 1.3 + g.ph));
        const grad = ctx.createRadialGradient(x, y, 0, x, y, big);
        grad.addColorStop(0, `rgba(240,38,47,${g.a})`);
        grad.addColorStop(1, "rgba(240,38,47,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }
    };

    const drawPings = (dt) => {
      for (const a of airports) {
        if (dt) {
          a.timer -= dt;
          if (a.timer <= 0) { addPing(a.x * w, a.y * h, 150); a.timer = 3.5 + Math.random() * 3; }
        }
        // the airport itself: a small dot that breathes
        const pulse = 0.5 + 0.5 * Math.sin(clock * 2 + a.x * 10);
        ctx.fillStyle = `rgba(255,90,90,${0.35 + pulse * 0.3})`;
        ctx.beginPath();
        ctx.arc(a.x * w, a.y * h, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = pings.length - 1; i >= 0; i--) {
        const p = pings[i];
        p.age += dt;
        const k = p.age / p.life;
        if (k >= 1) { pings.splice(i, 1); continue; }
        for (const [lag, strength] of [[0, 1], [0.18, 0.55]]) {
          const kk = Math.max(0, k - lag);
          if (kk <= 0) continue;
          const ee = 1 - Math.pow(1 - kk, 3);
          ctx.strokeStyle = `rgba(240,38,47,${Math.pow(1 - kk, 1.6) * 0.5 * strength})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.max * ee, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    const draw = (dt) => {
      clock += dt;
      ctx.clearRect(0, 0, w, h);
      drawGlows();
      drawPings(dt);
      for (const f of flights) {
        if (dt) {
          f.t += f.speed * dt;
          if (f.t > 1) Object.assign(f, newFlight(f.layer, false));
        }
        const { scale, alpha } = f.layer;
        const [x, y] = bez(f.p, f.t, w, h);
        const [x2, y2] = bez(f.p, Math.min(1, f.t + 0.004), w, h);
        const angle = Math.atan2(y2 - y, x2 - x);

        const near = Math.max(0, 1 - Math.hypot(x - mx, y - my) / 220);
        const a = Math.min(1, alpha + near * 0.35);

        // planned route: faint dotted line
        ctx.setLineDash([2, 9]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(240,38,47,${alpha * 0.16})`;
        ctx.beginPath();
        for (let k = 0; k <= 40; k++) {
          const [rx, ry] = bez(f.p, k / 40, w, h);
          k ? ctx.lineTo(rx, ry) : ctx.moveTo(rx, ry);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // trail: fades with distance behind the plane
        const steps = 36;
        const span = 0.2;
        let [px, py] = [x, y];
        for (let k = 1; k <= steps; k++) {
          const tt = f.t - (k / steps) * span;
          if (tt < 0) break;
          const [qx, qy] = bez(f.p, tt, w, h);
          const fade = 1 - k / steps;
          ctx.strokeStyle = `rgba(240,38,47,${a * fade * fade * 0.9})`;
          ctx.lineWidth = (0.6 + fade * 1.6) * Math.max(0.7, scale * 0.8);
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(qx, qy);
          ctx.stroke();
          px = qx; py = qy;
        }

        drawPlane(x, y, angle, scale * 0.9, `rgba(255,${70 + near * 120},${70 + near * 120},${a})`);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(0);
    };

    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onDown = (e) => {
      if (!reduce) addPing(e.clientX, e.clientY, 190);
    };
    const onClick = (e) => {
      if (e.target.closest("a, button, input, textarea, select, [role=dialog]")) return;
      const hit = flights.some((f) => {
        const [x, y] = bez(f.p, f.t, w, h);
        const [x2, y2] = bez(f.p, Math.min(1, f.t + 0.004), w, h);
        const angle = Math.atan2(y2 - y, x2 - x);
        const dx = e.clientX - x, dy = e.clientY - y;
        const scale = f.layer.scale * 0.9;
        const px = (dx * Math.cos(angle) + dy * Math.sin(angle)) / scale;
        const py = (-dx * Math.sin(angle) + dy * Math.cos(angle)) / scale;
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.beginPath();
        HALF.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        for (let i = HALF.length - 1; i >= 0; i--) ctx.lineTo(HALF[i][0], -HALF[i][1]);
        ctx.closePath();
        const contains = ctx.isPointInPath(px, py);
        ctx.restore();
        return contains;
      });
      if (hit) setShowStory(true);
    };

    resize();
    if (reduce) {
      // one still frame with a few rings caught mid-expansion
      airports.slice(0, 3).forEach((a) => pings.push({ x: a.x * w, y: a.y * h, age: 1.2, life: 3.2, max: 150 }));
      draw(0);
    }
    window.addEventListener("resize", resize);
    window.addEventListener("click", onClick);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      raf = requestAnimationFrame((t) => { last = t; loop(t); });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  useEffect(() => {
    if (!showStory) return;
    const onKey = (e) => { if (e.key === "Escape") setShowStory(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showStory]);

  return <>
    <canvas ref={ref} className="sky" aria-hidden="true" />
    {showStory && <div className="flight-story-backdrop" onClick={() => setShowStory(false)}>
      <div className="flight-story" role="dialog" aria-modal="true" aria-labelledby="flight-story-title" onClick={(e) => e.stopPropagation()}>
        <button className="flight-story-close" onClick={() => setShowStory(false)} aria-label="Close" autoFocus>×</button>
        <span className="flight-story-label">THE STORY BEHIND THE SKY</span>
        <h2 id="flight-story-title">Why aeroplanes?</h2>
        <p>I've been passionate about aeroplanes since my childhood. They inspired the theme of this portfolio, just a little more me.</p>
      </div>
    </div>}
  </>;
}
