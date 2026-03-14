import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Projects(){

const [activeProject,setActiveProject] = useState(null);

const projects = [

{
title:"Dynamic Course Allocator",
stack:"React • Express • PostgreSQL",
short:"Full-stack system for course allocation with admin approval workflow.",
description:`
Developed the frontend using React and implemented backend APIs using Express.
Designed PostgreSQL schemas for course management and application tracking.
Implemented authentication and role-based access for students and administrators.
Built application approval workflows and dynamic course allocation logic.
`,
github:"https://github.com/MRhacksalive/Course-Allocator"
},

{
title:"Hospital Management System",
stack:"Java • JavaFX",
short:"Desktop system to manage hospital operations and patient records.",
description:`
Developed a desktop application using Java and JavaFX.
Implemented modules for patient records, doctor scheduling and appointments.
Designed UI components using JavaFX layouts.
Handled CRUD operations for hospital data management.
`,
github:"https://github.com/MRhacksalive/Hospital-Management-System"
},

{
title:"Stock Trading Platform",
stack:"Python • JavaScript",
short:"Simulated stock trading system with security analysis features.",
description:`
Developed a simulated trading environment allowing users to buy and sell stocks.
Implemented backend logic for order execution and portfolio tracking.
Built analysis modules to evaluate trading security vulnerabilities.
Used Python for trading logic and JavaScript for UI interactions.
`,
github:"https://github.com/MRhacksalive/Stock-Trading-platform-with-Security-assesments"
}

];

return(

<SectionWrapper id="projects">

<h2>Projects</h2>

<div className="project-list">

{projects.map((project,index)=>(
<div
key={index}
className="project-card"
onClick={()=>setActiveProject(project)}
>

<h3>{project.title}</h3>
<p className="stack">{project.stack}</p>
<p className="short">{project.short}</p>

</div>
))}

</div>


{/* Modal */}

{activeProject && (
  <div className="project-modal" onClick={()=>setActiveProject(null)}>

    <div
      className="modal-content"
      onClick={(e)=>e.stopPropagation()}
    >

      <button
        className="close-btn"
        onClick={()=>setActiveProject(null)}
      >
        ×
      </button>

      <h3>{activeProject.title}</h3>

      

      <p className="description">
        {activeProject.description}
      </p>

      <a
        href={activeProject.github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        View on GitHub
      </a>

    </div>

  </div>
)}

</SectionWrapper>

)

}