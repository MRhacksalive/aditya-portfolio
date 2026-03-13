import SectionWrapper from "./SectionWrapper";

export default function Experience() {

return(

<SectionWrapper id="experience">

<h2>Experience</h2>

<div className="card">
<h3>Zemoso Technologies</h3>
<p>Software Intern</p>
<ul>
<li>Gained Hands-on experience with Python Libraries such as Numpy and Pandas for data
manipulation and analysis.</li>
<li>Learned to visualize complex datasets using Matplotlib and Seaborn, building clear data
visualization.</li>
<li>Applied ML workflows using Python libraries for real-world datasets, developing insights
through visualization and feature extraction</li>
</ul>
</div>

<div className="card">
<h3>Mars Rover Manipal</h3>
<ul>
<li>Conducted data-driven analysis on sensor-actuator systems, emphasizing predictive
modeling for hardware-software integration.</li>
<li>Collaborated on system-level integration with sensors and actuators.</li>
<li>Prepared structured technical reports covering backend API design, database schema organization, and frontend integration.</li>
</ul>
</div>

</SectionWrapper>

)
}