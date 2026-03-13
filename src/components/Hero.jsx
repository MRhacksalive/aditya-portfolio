import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero hero-container">

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-text"
      >
        <h1>Aditya Kishore Roy</h1>

        <h3 className="hero-role">
          <TypeAnimation
            sequence={[
              "Software Intern", 2000,
              "Machine Learning Enthusiast", 2000,
              "Full Stack Developer", 2000,
              "Data Analyst", 2000
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p>
          Passionate about technology, machine learning,
          data visualization and full-stack development.
        </p>

        <div className="hero-buttons">

          <a
            href="https://github.com/mrhacksalive"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            GitHub
          </a>

          <a
            href="/resume1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-outline"
          >
            Resume
          </a>

        </div>

        {/* NEW SECTION */}
        <div className="hero-highlights">

          <div className="highlight">
            <h4>3+</h4>
            <p>Projects</p>
          </div>

          <div className="highlight">
            <h4>ML</h4>
            <p>Machine Learning</p>
          </div>

          <div className="highlight">
            <h4>FS</h4>
            <p>Full Stack</p>
          </div>

          <div className="highlight">
            <h4>MIT</h4>
            <p>Manipal</p>
          </div>

        </div>

      </motion.div>

      <motion.img
        src="/profile.jpeg"
        alt="Aditya"
        className="hero-img"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}