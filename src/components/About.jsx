import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode, FaFutbol, FaMusic } from "react-icons/fa";

export default function About(){

return(

<SectionWrapper id="about">

<div className="about-container">

<h2>About</h2>

<motion.p
className="about-text"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:.7}}
viewport={{once:true}}
>
BTech in Computer & Communication Engineering at Manipal Institute of Technology.
Interested in machine learning, data analysis, and software development.
Focused on solving real-world problems and building impactful solutions.
Always eager to learn and explore new technologies.
</motion.p>
<a
href="/resume1.pdf"
target="_blank"
rel="noopener noreferrer"
className="resume-btn"
>
View Resume
</a>


{/* SKILLS */}

<h3 className="about-subtitle">What I Work With</h3>

<div className="about-grid">

<motion.div
className="about-card"
whileHover={{scale:1.05}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
viewport={{once:true}}
>
<FaLaptopCode />
<h3>Full Stack</h3>
<p>Building scalable web applications and backend systems.</p>
</motion.div>


<motion.div
className="about-card"
whileHover={{scale:1.05}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6,delay:.1}}
viewport={{once:true}}
>
<FaBrain />
<h3>Machine Learning</h3>
<p>Exploring models, algorithms and intelligent systems.</p>
</motion.div>


<motion.div
className="about-card"
whileHover={{scale:1.05}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6,delay:.2}}
viewport={{once:true}}
>
<FaCode />
<h3>Data Analysis</h3>
<p> Visualizing datasets and performing data manipulation and analysis.</p>
</motion.div>

</div>


{/* HOBBIES */}

<h3 className="about-subtitle">Interests & Hobbies</h3>

<div className="about-grid hobbies">

<motion.div
className="about-card"
whileHover={{scale:1.05}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
viewport={{once:true}}
>
<FaFutbol />
<h3>Football</h3>
<p>Passionate about sports<p>
</p>  and teamwork.</p>
</motion.div>


<motion.div
className="about-card"
whileHover={{scale:1.05}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6,delay:.1}}
viewport={{once:true}}
>
<FaMusic />
<h3>Music</h3>
<p>Enjoy exploring different genres <p>
</p> and creativity.</p>
</motion.div>

</div>



</div>

</SectionWrapper>

)

}