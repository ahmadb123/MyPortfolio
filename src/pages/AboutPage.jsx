import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import aboutImage from '../assets/AboutMePageImg2.jpg';
import { FaCode, FaDatabase, FaCloud, FaUsers, FaGraduationCap, FaBriefcase, FaCertificate, FaLightbulb, FaNewspaper, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Resume from '../assets/MyResume.pdf';

function AboutPage() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="about-page">
            <div className="about-content">
                <h1 className="about-title">About</h1>
                <p className="about-text">
                    Engineer, builder, and occasional bioinformatician. I ship products that get used.
                </p>
                
                <img className="about-image" src={aboutImage} alt="Workspace setup" />
                
                <div className={`my-journey ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    <strong>My Journey</strong>
                    <div className="journey-content">
                        I'm pursuing my M.S. in Computer Science at Northeastern University's Khoury College,
                        building on a B.S. from Endicott College (2025, GPA 3.5).

                        {isExpanded && (
                            <>
                                <br /><br />
                                I've shipped across three domains: a genomic analytics tool for SynGAP Research
                                Fund (now the primary interface researchers use, covered by Endicott College News);
                                an embedded pediatric respiratory monitor built on ESP32-S3 with real-time C++
                                firmware; and a cross-platform gaming identity backend integrating four OAuth2
                                providers and WebSocket messaging at sub-100ms latency.
                                <br /><br />
                                My interest is in problems where good software makes real-world differences —
                                in medicine, in accessibility, in the small daily interactions people don't
                                realize are broken until someone fixes them. Currently deciding whether that
                                means founding a company or joining an early-stage team.
                            </>
                        )}
                    </div>
                    
                    <button 
                        className="read-more-btn" 
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? (
                            <>
                                Read Less <FaChevronUp />
                            </>
                        ) : (
                            <>
                                Read More <FaChevronDown />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Featured Work Article */}
            <div className="featured-article">
                <div className="article-icon-container">
                    <FaNewspaper className="article-icon" />
                </div>
                <div className="article-content">
                    <h3>Featured in Endicott College News</h3>
                    <p className="article-title">"Coding for a Cure: Building Tools for Rare Disease Research"</p>
                    <p className="article-description">
                        Read about my work developing the SYNGAP1 Mutation Viewer, a genomic data visualization 
                        tool helping medical professionals and families affected by this rare genetic disease.
                    </p>
                    <a 
                        href="https://www.endicott.edu/news-events/news/news-articles/2025/03/coding-for-a-cure" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="article-link"
                    >
                        Read Full Article <FaExternalLinkAlt />
                    </a>
                </div>
            </div>

            {/* Education & Experience Timeline */}
            <div className="timeline-section">
                <div className="timeline-item">
                    <FaGraduationCap className="timeline-icon" />
                    <div className="timeline-content">
                        <h3>Education</h3>
                        <p className="timeline-title">M.S. Computer Science, Northeastern University — Expected May 2028</p>
                        <p className="timeline-subtitle">B.S. Computer Science, Endicott College — 2025 (GPA 3.5)</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <FaBriefcase className="timeline-icon" />
                    <div className="timeline-content">
                        <h3>Experience</h3>
                        <p className="timeline-title">Recent: SynGAP Research Fund (Bioinformatics & SWE Intern)</p>
                        <p className="timeline-subtitle">Prior: Endicott Cybersecurity Lab · Female Fan Nation (Contract)</p>
                    </div>
                </div>
            </div>

            {/* Skills Cards */}
            <div className="skills-section">
                <div className="skill-card">
                    <FaCode className="skill-icon" />
                    <h3>Full-Stack Development</h3>
                    <p>Proficient in Java, Spring Boot, React, and modern web technologies</p>
                </div>

                <div className="skill-card">
                    <FaDatabase className="skill-icon" />
                    <h3>Database Management</h3>
                    <p>Advanced knowledge of MySQL, MongoDB and Redis optimization</p>
                </div>

                <div className="skill-card">
                    <FaCloud className="skill-icon" />
                    <h3>Cloud & DevOps</h3>
                    <p>AWS infrastructure, Docker, CI/CD pipelines, and deployment</p>
                </div>

                <div className="skill-card">
                    <FaUsers className="skill-icon" />
                    <h3>System Design</h3>
                    <p>Scalable architectures handling 1000+ concurrent users</p>
                </div>
            </div>

            {/* Certifications & Areas of Interest */}
            <div className="bottom-section">
                <div className="certifications">
                    <div className="section-header">
                        <FaCertificate className="section-icon" />
                        <h2>Certifications & Training</h2>
                    </div>
                    <ul className="cert-list">
                        <li>AWS Certified Developer Associate (In Progress)</li>
                        <li>Oracle Certified Professional: Java SE 11 Developer</li>
                        <li>Meta Back-End Developer Specialization</li>
                    </ul>
                </div>

                <div className="interests">
                    <div className="section-header">
                        <FaLightbulb className="section-icon" />
                        <h2>Areas of Interest</h2>
                    </div>
                    <ul className="interest-list">
                        <li>Distributed Systems Architecture</li>
                        <li>Real-Time Communication Protocols</li>
                        <li>Cloud Infrastructure Optimization</li>
                    </ul>
                </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>Let's work together</h2>
                <p>I'm always open to discussing new opportunities, interesting projects, or potential collaborations.</p>
                <div className="cta-buttons-about">
                   <a href={Resume} download="Ahmad_Bishara_Resume.pdf">
                        <button className="download-resume-btn">
                            Download Resume
                        </button>
                    </a>
                    <Link to="/contact">
                        <button className="get-touch-btn-about">Get in Touch</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;