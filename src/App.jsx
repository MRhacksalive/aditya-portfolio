import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">

      {/* Background glow elements */}
      <div className="glow"></div>
      <div className="glow"></div>
      <div className="glow"></div>
      
      {/* Website Sections */}
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