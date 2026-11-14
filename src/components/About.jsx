import SectionWrapper from "./SectionWrapper";
import { FaCode, FaBrain, FaLaptopCode, FaFutbol, FaMusic, FaCamera } from "react-icons/fa";

const skills = [
  { Icon: FaBrain, title: "Business Analysis", text: "Optimizing processes, analyzing data, and solving real-world business problems." },
  { Icon: FaLaptopCode, title: "Machine Learning", text: "Exploring models, algorithms and intelligent systems." },
  { Icon: FaCode, title: "Data Analysis", text: "Visualizing datasets and performing data manipulation and analysis." },
];

const interests = [
  { Icon: FaFutbol, title: "Football", text: "Passionate about sports and teamwork." },
  { Icon: FaCamera, title: "Photography", text: "Live to capture moments and tell stories." },
  { Icon: FaMusic, title: "Music", text: "Enjoy exploring different genres and creativity." },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About" note="Manipal Institute of Technology">
      <div className="about-top">
        <p className="lede">
          Focused on solving real-world problems and building impactful solutions.
        </p>

        <div className="about-side">
          <div className="prose">
            <p>
              BTech in Computer &amp; Communication Engineering at Manipal Institute of Technology.
              Interested in machine learning, data analysis, and software development.
            </p>
            <p>Always eager to learn and explore new technologies.</p>
          </div>
          <a href="/resume1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-solid">
            View resume
          </a>
        </div>
      </div>

      <h3 className="sub">Skills</h3>
      <ul className="cols">
        {skills.map(({ Icon, title, text }) => (
          <li key={title} className="col col-red">
            <Icon className="col-icon" aria-hidden="true" />
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ul>

      <h3 className="sub">Interests</h3>
      <ul className="cols">
        {interests.map(({ Icon, title, text }) => (
          <li key={title} className="col">
            <Icon className="col-icon" aria-hidden="true" />
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
