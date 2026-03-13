import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Stack() {

const [logo,setLogo] = useState(null);

const skills = [
{ name:"Python", img:"/logos/python.png"},
{ name:"JavaScript", img:"/logos/javascript.jpeg"},
{ name:"React", img:"/logos/react.png"},
{ name:"SQL", img:"/logos/sql.png"},
{ name:"C", img:"/logos/c.png"},
{ name:"Java", img:"/logos/java.png"},
{ name:"PostgreSQL", img:"/logos/postgres.jpeg"},
{ name:"Express", img:"/logos/express.png"},
{ name:"NumPy", img:"/logos/numpy.png"},
{ name:"Pandas", img:"/logos/pandas.png"},
{ name:"Matplotlib", img:"/logos/matplotlib.png"},
{ name:"Seaborn", img:"/logos/seaborn.png"},
{ name:"Scikit-Learn", img:"/logos/sklearn.jpeg"},
{ name:"PyTorch", img:"/logos/pytorch.png"},
{ name:"LangChain", img:"/logos/langchain.png"},
{ name:"Git", img:"/logos/git.png"}
];

return(

<SectionWrapper id="stack">

<h2>Stack</h2>

<div className="stack-grid">

{skills.map((skill)=>(
<div
className="stack-item"
onClick={()=>setLogo(skill.img)}
>
{skill.name}
</div>
))}

</div>

{logo && (
<div style={{marginTop:"40px",textAlign:"center"}}>
<img src={logo} style={{width:"120px"}}/>
</div>
)}

</SectionWrapper>

)

}