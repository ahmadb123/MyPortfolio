import './AboutPage.css';
import aboutImage from '../assets/AboutMePageImg2.jpg';
import { FaCode, FaDatabase, FaCloud, FaUsers, FaGraduationCap, FaBriefcase, FaCertificate, FaLightbulb, FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa';
import Resume from '../assets/MyResume.pdf';
function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-content">
                <h1 className="about-title">About</h1>
                <p className="about-text">
                    Passionate software engineer building scalable solutions that make a difference
                </p>
                
                <img className="about-image" src={aboutImage} alt="Workspace setup" />
                
                <div className="my-journey">
                    <strong>My Journey</strong>
                    I'm currently pursuing my Master's in Computer Science at Northeastern University, 
                    building upon a strong foundation established during my undergraduate studies at Endicott College.
                    <br /><br />
                    With over 4 years of hands-on development experience, I've architected and delivered 
                    full-stack applications that serve thousands of users. My work spans from creating genomic 
                    research portals for medical professionals to building real-time multiplayer gaming platforms.
                    <br /><br />
                    I'm passionate about leveraging cutting-edge technologies to solve complex problems. 
                    Whether it's optimizing API performance, designing microservices architectures, or 
                    implementing real-time communication systems, I thrive on challenges that push the 
                    boundaries of what's possible.
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
                        <p className="timeline-title">Master of Science, Northeastern University (2027)</p>
                        <p className="timeline-subtitle">BS Computer Science, Endicott College (2021 - Class of 2025)</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <FaBriefcase className="timeline-icon" />
                    <div className="timeline-content">
                        <h3>Experience</h3>
                        <p className="timeline-title">3+ years in Full-Stack Development</p>
                        <p className="timeline-subtitle">Full-Stack Development Intern at SynGAP Research Fund</p>
                    </div>
                </div>
            </div>

            {/* Skills Cards */}
            <div className="skills-section">
                <div className="skill-card">
                    <FaCode className="skill-icon" />
                    <h3>Full-Stack Development</h3>
                    <p>Expert in Java, Spring Boot, React, and modern web technologies</p>
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
                    <button className="get-touch-btn-about">Get in Touch</button>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;