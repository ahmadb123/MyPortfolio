import React from "react";
import { Fa , FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                {/* Left section */}
                <div className="footer-left-top">
                    <h3>Ahmad Bishara</h3>
                    <p className="job-desc">Full-Stack Software Engineer building scalable digital experiences</p>    
                </div>

                {/* Middle section - Contact */}
                <div className="footer-middle-top">
                    <h3 className="contact">Contact</h3>
                    <a href="mailto:Bishara.a@northeastern.edu" className="email">Bishara.a@northeastern.edu</a>    
                    <p className="phone">978-810-7418</p>
                    <p className="location">Boston, MA</p>
                </div>

                {/* Right section - Social icons */}
                <div className="footer-right-top">
                    <a href="https://github.com/ahmadb123" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>    
                    <a href="https://www.linkedin.com/in/ahmad-bishara-1b4a20250/ bn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:Bishara.a@northeastern.edu">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="footer-content">
                <p>© 2025 Ahmad Bishara. Built with React, JavaScript, and CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;