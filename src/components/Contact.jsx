import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Contact({ onShowStory }) {
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
          <button type="button" className="foot-name" onClick={onShowStory}>Aditya Kishore Roy</button>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </section>
  );
}
