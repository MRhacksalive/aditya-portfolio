import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero hero-container">

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Aditya Kishore Roy</h1>
        <h3>Software Intern</h3>

        <p>
          Passionate about technology, machine learning,
          data visualization and full-stack development.
        </p>
      </motion.div>

      <motion.img
        src="/profile.jpeg"
        alt="Aditya"
        className="hero-img"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

    </section>
  );
}