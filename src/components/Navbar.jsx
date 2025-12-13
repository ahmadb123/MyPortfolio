import Resume from '../assets/MyResume.pdf';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-a">A</span>
        <span className="logo-b">B</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
      </ul>
     <a href={Resume} download="Ahmad_Bishara_Resume.pdf">
      <button className="download-resume-btn">
          Download Resume
      </button>
    </a>
    </nav>
  )
}

export default Navbar