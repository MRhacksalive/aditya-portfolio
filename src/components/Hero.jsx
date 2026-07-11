import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <motion.div
          className="hero-text"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Greeting */}
          <p className="hero-greeting">Hi there, I am</p>

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

          <p className="hero-desc">
            Passionate about technology, machine learning,
            data visualization and full-stack development.
          </p>

          {/* Social icons */}
          <div className="hero-socials">

            <a
              href="https://github.com/mrhacksalive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-roy-10ad9819/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:adityakroy123@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Profile image */}
        <motion.img
          src="/profile.jpeg"
          alt="Aditya"
          className="hero-img"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

      </div>

    </section>
  );
}