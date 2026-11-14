import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? " nav-scrolled" : ""}${open ? " nav-open" : ""}`}>
      <div className="nav-bar">
        <a href="#top" className="nav-logo" aria-label="Back to top" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="AKR" />
        </a>

        <nav className="nav-links" aria-label="Primary" id="primary-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Resume
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
