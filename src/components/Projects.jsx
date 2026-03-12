import SectionWrapper from "./SectionWrapper";

export default function Projects(){

return(

<SectionWrapper id="projects">

<h2>Projects</h2>

<div className="project-grid">

<a href="https://github.com/MRhacksalive/course_alloc"
target="_blank"
className="card">

<h3>Dynamic Course Allocator</h3>
<p>React • Express • PostgreSQL</p>

</a>


<a href="https://github.com/MRhacksalive/Hospital-Management-System"
target="_blank"
className="card">

<h3>Hospital Management System</h3>
<p>Java • JavaFX</p>

</a>


<a href="https://github.com/MRhacksalive/Stock-Trading-platform-with-Security-assesments"
target="_blank"
className="card">

<h3>Stock Trading Platform</h3>
<p>Security Assessments • Trading System</p>

</a>

</div>

</SectionWrapper>

)
}