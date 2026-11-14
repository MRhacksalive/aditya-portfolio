import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    if (!showStory) return;

    const onKey = (e) => {
      if (e.key === "Escape") setShowStory(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showStory]);

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2 className="contact-title">Have a project or a role in mind? Write to me.</h2>

        <a href="mailto:adityakroy123@gmail.com" className="contact-mail">
          adityakroy123@gmail.com
          <FiArrowUpRight aria-hidden="true" />
        </a>

        <div className="contact-row">
          <a href="tel:+91-9885173701" className="contact-phone">+91-9885173701</a>

          <div className="contact-socials">
            <a href="https://github.com/mrhacksalive" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/adityaa__roy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/aditya-roy-10ad9819/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <footer className="foot">
          <button type="button" className="foot-name" onClick={() => setShowStory(true)}>
            Aditya Kishore Roy
          </button>
          <a href="#top">Back to top</a>
        </footer>
      </div>

      {showStory && (
        <div className="flight-story-backdrop" onClick={() => setShowStory(false)}>
          <div
            className="flight-story"
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-flight-story-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flight-story-close"
              onClick={() => setShowStory(false)}
              aria-label="Close"
              autoFocus
            >
              ×
            </button>
            <span className="flight-story-label">THE STORY BEHIND THE SKY</span>
            <h2 id="footer-flight-story-title">Why aeroplanes?</h2>
            <p>
              I've been passionate about aeroplanes since my childhood. They inspired the
              theme of this portfolio, just a little more me.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}