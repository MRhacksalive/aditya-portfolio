import SectionWrapper from "./SectionWrapper";

export default function Stack() {

const skills = [
{ name:"Python", img:"/logos/python.png"},
{ name:"JavaScript", img:"/logos/javascript.png"},
{ name:"React", img:"/logos/react.png"},
{ name:"SQL", img:"/logos/sql.png"},
{ name:"C", img:"/logos/c.png"},
{ name:"Java", img:"/logos/java.png"},
{ name:"PostgreSQL", img:"/logos/postgress.png"},
{ name:"Express", img:"/logos/express.png"},
{ name:"NumPy", img:"/logos/numpy.png"},
{ name:"Pandas", img:"/logos/pandas.png"},
{ name:"Matplotlib", img:"/logos/matplotlib.png"},
{ name:"Seaborn", img:"/logos/seaborn.png"},
{ name:"Scikit-Learn", img:"/logos/sklearn.png"},
{ name:"PyTorch", img:"/logos/pytorch.png"},
{ name:"LangChain", img:"/logos/langchain.png"},
{ name:"Git", img:"/logos/git.png"}
];

return(

<SectionWrapper id="stack">

<h2>Stack</h2>

<div className="stack-grid">

{skills.map((skill)=>(
<div className="stack-item" key={skill.name}>

<span className="stack-name">{skill.name}</span>

<img
src={skill.img}
alt={skill.name}
className="stack-logo"
/>

</div>
))}

</div>

</SectionWrapper>

)

}