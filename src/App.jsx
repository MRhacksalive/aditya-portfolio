import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

/* PARTICLES */

function Particles(){

const particles = Array.from({length:30});

return(
<div className="particles">

{particles.map((_,i)=>(
<div
key={i}
className="particle"
style={{
left: Math.random()*100+"vw",
animationDuration: 2 + Math.random()*6 + "s",
animationDelay: Math.random()*2 + "s"
}}
></div>
))}

</div>
);

}

function App() {
  return (
    <div className="App">

      <Particles/>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />

    </div>
  );
}

export default App;