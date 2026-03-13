import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">

      <h2>About</h2>

      <p>
        BTech in Computer & Communication Engineering at
        Manipal Institute of Technology. Interested in
        machine learning, data analysis, and software development.
        Focused on leveraging technology to solve real-world problems and create impactful solutions.
        Always eager to learn and grow in the field of technology.
        Love football, music. GGMU
      </p>

      <br/>

      <a
href="/resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="card"
style={{display:"inline-block"}}
>
View Resume
</a>

    </SectionWrapper>
  );
}