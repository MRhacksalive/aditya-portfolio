import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FiPlus, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Dynamic Course Allocator",
    stack: "React • Express • PostgreSQL",
    short: "Full-stack system for course allocation with admin approval workflow.",
    description: `
Developed the frontend using React and implemented backend APIs using Express.
Designed PostgreSQL schemas for course management and application tracking.
Implemented authentication and role-based access for students and administrators.
Built application approval workflows and dynamic course allocation logic.
`,
    github: "https://github.com/MRhacksalive/Course-Allocator",
  },
  {
    title: "Hospital Management System",
    stack: "Java • JavaFX",
    short: "Desktop system to manage hospital operations and patient records.",
    description: `
Developed a desktop application using Java and JavaFX.
Implemented modules for patient records, doctor scheduling and appointments.
Designed UI components using JavaFX layouts.
Handled CRUD operations for hospital data management.
`,
    github: "https://github.com/MRhacksalive/Hospital-Management-System",
  },
  {
    title: "Stock Trading Platform",
    stack: "Python • JavaScript",
    short: "Simulated stock trading system with security analysis features.",
    description: `
Developed a simulated trading environment allowing users to buy and sell stocks.
Implemented backend logic for order execution and portfolio tracking.
Built analysis modules to evaluate trading security vulnerabilities.
Used Python for trading logic and JavaScript for UI interactions.
`,
    github: "https://github.com/MRhacksalive/Stock-Trading-platform-with-Security-assesments",
  },
  {
    title: "Flight Data Analysis & Visualization",
    stack: "Node • React",
    short: "A full-stack flight tracking system using React and Node.js",
    description: `
Built a full-stack flight tracking system using React and Node.js, integrating real-time aviation data APIs to monitor live aircraft movement.
Developed interactive map visualizations for tracking flight paths and positions, enabling intuitive exploration of flight data.
Implemented backend services for data fetching, processing, and efficient API handling..
`,
    github: "https://github.com/MRhacksalive/Flight-analyzer",
  },
];

const lines = (text) => text.split("\n").map((l) => l.trim()).filter(Boolean);

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <SectionWrapper id="projects" title="Projects" note="Four builds, from databases to live maps.">
      <ul className="proj-list">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.title} className={`proj${isOpen ? " proj-open" : ""}`}>
              <button
                type="button"
                className="proj-head"
                aria-expanded={isOpen}
                aria-controls={`proj-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="proj-title">{p.title}</span>
                <span className="proj-short">{p.short}</span>
                <span className="proj-tags">
                  {p.stack.split("•").map((s) => (
                    <span key={s}>{s.trim()}</span>
                  ))}
                </span>
                <FiPlus className="proj-plus" aria-hidden="true" />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`proj-panel-${i}`}
                    className="proj-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <div className="proj-inner">
                      <ul>
                        {lines(p.description).map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                        View on GitHub <FiArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
}
