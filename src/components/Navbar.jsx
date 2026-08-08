import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <span className="logo-a">Ahmad </span>
        <span className="logo-b">Bishara</span>
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
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
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