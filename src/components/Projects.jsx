import SectionWrapper from "./SectionWrapper";

export default function Projects(){

return(

<SectionWrapper id="projects">

<h2>Projects</h2>

<div className="project-grid">

<a
href="https://github.com/MRhacksalive/Course-Allocator"
target="_blank"
rel="noopener noreferrer"
className="card"
>
<h3>Dynamic Course Allocator</h3>

<p>React • Express • PostgreSQL</p>

<p>
A full-stack system that allows students to apply for courses
while administrators review and approve allocations dynamically.
Includes authentication, course management and application tracking.
</p>

</a>


<a
href="https://github.com/MRhacksalive/Hospital-Management-System"
target="_blank"
rel="noopener noreferrer"
className="card"
>

<h3>Hospital Management System</h3>

<p>Java • JavaFX</p>

<p>
Desktop application for managing hospital operations including
patient records, doctor schedules and appointment booking.
Built using Java and JavaFX UI.
</p>

</a>


<a
href="https://github.com/MRhacksalive/Stock-Trading-platform-with-Security-assesments"
target="_blank"
rel="noopener noreferrer"
className="card"
>
<h3>Stock Trading Platform</h3>

<p>Python • JavaScript</p>

<p>
Simulated stock trading environment where users can buy
and sell stocks while analyzing security vulnerabilities
within the trading system.
</p>

</a>

</div>

</SectionWrapper>

)
}