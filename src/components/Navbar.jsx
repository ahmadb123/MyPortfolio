import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Resume from '../assets/MyResume.pdf';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-a">A</span>
        <span className="logo-b">B</span>
      </div>

      {/* Mobile menu toggle */}
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="/about" onClick={closeMenu}>About</a></li>
        <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
        <li><a href="/projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="/experience" onClick={closeMenu}>Experience</a></li>
      </ul>

      <a href={Resume} download="Ahmad_Bishara_Resume.pdf" className="resume-link">
        <button className="download-resume-btn">
          Download Resume
        </button>
      </a>
    </nav>
  );
}

export default Navbar;