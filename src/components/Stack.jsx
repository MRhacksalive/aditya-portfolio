import SectionWrapper from "./SectionWrapper";

const groups = [
  {
    name: "Languages",
    items: [
      { name: "Python", img: "/logos/python.png" },
      { name: "JavaScript", img: "/logos/javascript.png" },
      { name: "SQL", img: "/logos/sql.png" },
      { name: "C", img: "/logos/c.png" },
      { name: "Java", img: "/logos/java.png" },
    ],
  },
  {
    name: "Web and databases",
    items: [
      { name: "React", img: "/logos/react.png" },
      { name: "Express", img: "/logos/express.png" },
      { name: "PostgreSQL", img: "/logos/postgress.png" },
    ],
  },
  {
    name: "Data and machine learning",
    items: [
      { name: "NumPy", img: "/logos/numpy.png" },
      { name: "Pandas", img: "/logos/pandas.png" },
      { name: "Matplotlib", img: "/logos/matplotlib.png" },
      { name: "Seaborn", img: "/logos/seaborn.png" },
      { name: "Scikit-Learn", img: "/logos/sklearn.png" },
      { name: "PyTorch", img: "/logos/pytorch.png" },
      { name: "LangChain", img: "/logos/langchain.png" },
    ],
  },
  {
    name: "Tools",
    items: [{ name: "Git", img: "/logos/git.png" }],
  },
];

export default function Stack() {
  return (
    <SectionWrapper id="stack" title="Stack" note="Hover or tap a tile to see its logo.">
      {groups.map((g) => (
        <div key={g.name} className="stack-group">
          <h3 className="sub">{g.name}</h3>
          <ul className="stack-grid">
            {g.items.map((s) => (
              <li key={s.name} className="tile" tabIndex={0}>
                <span className="tile-name">{s.name}</span>
                <img src={s.img} alt="" className="tile-logo" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SectionWrapper>
  );
}
