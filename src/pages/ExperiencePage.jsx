import React from 'react';
import './ExperiencePage.css';
import { FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';
import syngapImageOne from '../assets/Syngap1Img1.png';
import syngapImageTwo from '../assets/Syngap1Img2.png';
import syngapImageThree from '../assets/Syngap1Img3.png';

function ExperiencePage() {
    return (
        <div className="experience-page">
            <div className="experience-container">
                {/* Header */}
                <div className="experience-header-section">
                    <h1 className="experience-main-title">
                        Professional <span className="highlight">Experience</span>
                    </h1>
                    <p className="experience-subtitle">
                        Building impactful solutions across healthcare, social platforms, and cybersecurity
                    </p>
                </div>

                {/* Featured Article Banner */}
                <div className="featured-article-banner">
                    <div className="banner-icon">
                        <FaNewspaper />
                    </div>
                    <div className="banner-content">
                        <h3>Featured in Endicott College News</h3>
                        <p>"Coding for a Cure: Building Tools for Rare Disease Research"</p>
                        <a 
                            href="https://www.endicott.edu/news-events/news/news-articles/2025/03/coding-for-a-cure" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="banner-link"
                        >
                            Read Full Article <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="experience-timeline">
                    {/* SYNGAP Research Fund */}
                    <div className="experience-card">
                        <div className="experience-card-header-full">
                            <div className="experience-title-group">
                                <h2>Full-Stack Developer</h2>
                                <p className="company-name">SynGAP Research Fund</p>
                                <p className="experience-date">2024 - 2025 • Los Angeles</p>
                            </div>
                        </div>
                        
                        <div className="experience-description">
                            <h3>SYNGAP1 Mutation Viewer</h3>
                            <p>
                                Developed an interactive genomic data visualization tool that helps medical 
                                professionals, researchers, and families understand SYNGAP1 gene mutations. 
                                The platform processes and displays over 5,000 genetic variants, making complex 
                                genomic data accessible and actionable for non-technical users.
                            </p>
                        </div>

                        {/* Interactive Tool Showcase */}
                        <div className="tool-showcase">
                            <h4>Interactive Tool Features</h4>
                            
                            {/* Main interface image */}
                            <div className="showcase-main-image">
                                <img src={syngapImageOne} alt="SYNGAP1 Mutation Viewer Interface" />
                                <div className="image-caption">
                                    <strong>Interactive Browser Interface:</strong> Filter mutations by type (frameshift, nonsense, missense, intronic) 
                                    with real-time visualization along the gene structure
                                </div>
                            </div>

                            {/* Feature grid with smaller images */}
                            <div className="showcase-features-grid">
                                <div className="showcase-feature">
                                    <img src={syngapImageTwo} alt="Gene Visualization" />
                                    <div className="feature-description">
                                        <h5>Genomic Position Mapping</h5>
                                        <p>Visualize 5,000+ mutations mapped to specific gene locations with color-coded variant types</p>
                                    </div>
                                </div>

                                <div className="showcase-feature">
                                    <img src={syngapImageThree} alt="Mutation Details" />
                                    <div className="feature-description">
                                        <h5>Detailed Mutation Information</h5>
                                        <p>Click any variant to view cDNA description, patient count, genomic location, and biorepository availability</p>
                                    </div>
                                </div>
                            </div>

                            {/* Live Demo Link */}
                            <div className="demo-link-container">
                                <a 
                                    href="https://stem.endicott.edu/jk-shiny/SyngapVariants/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="demo-link"
                                >
                                    🔬 View Live Tool <FaExternalLinkAlt />
                                </a>
                                <p className="demo-note">Interactive browser-based tool for researchers and families</p>
                            </div>
                        </div>

                        <div className="experience-highlights">
                            <h4>Key Achievements</h4>
                            <ul>
                                <li>Built interactive D3.js visualizations for 5,000+ genetic variants</li>
                                <li>Designed intuitive UI for non-technical users (families and researchers)</li>
                                <li>Implemented real-time filtering and search capabilities</li>
                                <li>Created responsive design accessible on mobile and desktop platforms</li>
                                <li>Featured in Endicott College News for impact on rare disease research</li>
                            </ul>
                        </div>

                        <div className="experience-impact">
                            <div className="impact-item">
                                <span className="impact-number">5,000+</span>
                                <span className="impact-label">Genetic variants visualized</span>
                            </div>
                            <div className="impact-item">
                                <span className="impact-number">100+</span>
                                <span className="impact-label">Families helped</span>
                            </div>
                            <div className="impact-item">
                                <span className="impact-number">Real-Time</span>
                                <span className="impact-label">Interactive filtering</span>
                            </div>
                        </div>

                        <div className="experience-tech">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">D3.js</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">Shiny</span>
                            <span className="tech-tag">Data Visualization</span>
                            <span className="tech-tag">Healthcare Tech</span>
                        </div>
                    </div>

                    {/* Female Fan Nation */}
                    <div className="experience-card">
                        <div className="experience-card-header">
                            <div className="experience-title-group">
                                <h2>Front-End Development Intern</h2>
                                <p className="company-name">Female Fan Nation</p>
                                <p className="experience-date">2022 • Remote</p>
                            </div>
                        </div>
                        
                        <div className="experience-description">
                            <p>
                                Contributed to the development of a social platform for female sports fans, 
                                implementing responsive UI components and improving user engagement features.
                            </p>
                        </div>

                        <div className="experience-highlights">
                            <h4>Key Achievements</h4>
                            <ul>
                                <li>Developed responsive React components for improved mobile experience</li>
                                <li>Implemented user authentication and profile management features</li>
                                <li>Enhanced UI/UX based on user feedback and analytics</li>
                                <li>Collaborated with backend team to integrate RESTful APIs</li>
                            </ul>
                        </div>

                        <div className="experience-tech">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">CSS</span>
                            <span className="tech-tag">REST APIs</span>
                        </div>
                    </div>

                    {/* Endicott College Cybersecurity Lab */}
                    <div className="experience-card">
                        <div className="experience-card-header">
                            <div className="experience-title-group">
                                <h2>Cybersecurity Researcher</h2>
                                <p className="company-name">Endicott College Cybersecurity Lab</p>
                                <p className="experience-date">2021 - 2022 • Beverly, MA</p>
                            </div>
                        </div>
                        
                        <div className="experience-description">
                            <p>
                                Conducted research on network security vulnerabilities and assisted in developing 
                                security protocols for educational institutions.
                            </p>
                        </div>

                        <div className="experience-highlights">
                            <h4>Key Achievements</h4>
                            <ul>
                                <li>Analyzed network traffic patterns to identify security vulnerabilities</li>
                                <li>Developed Python scripts for automated security testing</li>
                                <li>Documented security best practices for educational environments</li>
                                <li>Presented research findings to faculty and administration</li>
                            </ul>
                        </div>

                        <div className="experience-tech">
                            <span className="tech-tag">Network Security</span>
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Research</span>
                            <span className="tech-tag">Penetration Testing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;