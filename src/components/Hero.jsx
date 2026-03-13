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

        <h3>
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-outline"
          >
            Resume
          </a>

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

      <div className="floating-tech">
        <span>⚛️</span>
        <span>🐍</span>
        <span>📊</span>
        <span>💻</span>
        <span>🧠</span>
      </div>

    </section>
  );
}