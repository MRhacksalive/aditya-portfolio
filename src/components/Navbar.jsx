export default function Navbar() {
  return (
    <nav className="navbar">

      <a href="#" className="navbar-logo-link">
        <img
          src="/logo.png"
          alt="AKR Logo"
          className="navbar-logo"
        />
      </a>

      <div>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  )
}