import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import SkyBackground from "./components/SkyBackground";

function App() {
  return (
    <div className="App">
      <SkyBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
      </main>
      <Contact />
    </div>
  );
}

export default App;
