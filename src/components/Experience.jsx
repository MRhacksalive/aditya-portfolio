import SectionWrapper from "./SectionWrapper";

const roles = [
  {
    company: "Porter",
    role: "Business Intern",
    points: [
      "Analyzed operational data to identify process inefficiencies and support data-driven decision-making.",
      "Collaborated with cross-functional teams to improve business workflows and optimize operational performance.",
      "Built reports and dashboards to track key performance metrics and provide actionable business insights.",
    ],
  },
  {
    company: "Zemoso Technologies",
    role: "Software Intern",
    points: [
      "Gained Hands-on experience with Python Libraries such as Numpy and Pandas for data manipulation and analysis.",
      "Learned to visualize complex datasets using Matplotlib and Seaborn, building clear data visualization.",
      "Applied ML workflows using Python libraries for real-world datasets, developing insights through visualization and feature extraction",
    ],
  },
  {
    company: "Mars Rover Manipal",
    role: "Member",
    points: [
      "Conducted data-driven analysis on sensor-actuator systems, emphasizing predictive modeling for hardware-software integration.",
      "Collaborated on system-level integration with sensors and actuators.",
      "Prepared structured technical reports covering backend API design, database schema organization, and frontend integration.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" note="Two internships and a student rover team.">
      <div className="xp-list">
        {roles.map((r) => (
          <article key={r.company} className="xp">
            <div className="xp-who">
              <h3>{r.company}</h3>
              <p>{r.role}</p>
            </div>
            <ul className="xp-points">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
