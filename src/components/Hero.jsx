import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-hi rise" style={{ "--d": "0s" }}>Hi there, I am</p>

          <h1 className="hero-name">
            <span className="mask"><span>Aditya</span></span>
            <span className="mask"><span>Kishore Roy</span></span>
          </h1>

          <p className="hero-role rise" style={{ "--d": ".55s" }}>
            <TypeAnimation
              sequence={[
                "Business Intern at Porter", 2000,
                "Machine Learning Enthusiast", 2000,
                "Data Analyst", 2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>

          <p className="hero-desc rise" style={{ "--d": ".7s" }}>
            Passionate about technology, machine learning and data visualization.
          </p>

          <div className="hero-actions rise" style={{ "--d": ".85s" }}>
            <a href="#projects" className="btn btn-solid">See my projects</a>
            <a href="#contact" className="btn btn-line">Get in touch</a>

            <div className="hero-socials">
              <a href="https://github.com/mrhacksalive" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aditya-roy-10ad9819/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:adityakroy123@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <figure className="hero-photo rise" style={{ "--d": ".3s" }}>
          <span className="disc" aria-hidden="true" />
          <div className="frame">
            <img src="/profile.jpeg" alt="Portrait of Aditya Kishore Roy" />
          </div>
        </figure>
      </div>

      <ul className="hero-facts rise" style={{ "--d": "1s" }}>
        <li>
          <strong>Computer &amp; Communication Engineering</strong>
          <span>Manipal Institute of Technology</span>
        </li>
        <li>
          <strong>Business Intern</strong>
          <span>Porter</span>
        </li>
        <li>
          <strong>Member</strong>
          <span>Mars Rover Manipal</span>
        </li>
      </ul>
    </section>
  );
}
