import React from 'react';
import '../components/ProjectDetailsPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import calmmindImage from '../assets/CalmMindImg.png';
import calmmindImageTwo from '../assets/CalmMindImg2.png';
import calmmindImageThree from '../assets/CalmMindImg3.png';

function CalmMindPage() {
    return (
        <div className='projects-page'>
            <div className='projects-container'>
                {/* Back button */}
                <Link to="/projects" className='back-link'>
                    <FaArrowLeft /> Back to projects
                </Link>

                {/* Project Header */}
                <h1 className='project-title'>CalmMind</h1>
                <p className='project-subtitle'>
                    Mental health application providing personalized support based on attachment theory
                </p>

                {/* Tech Stack Tags */}
                <div className='tech-tags'>
                    <span className='tag'>React Native</span>
                    <span className='tag'>Spring Boot</span>
                    <span className='tag'>OpenAI API</span>
                    <span className='tag'>MySQL</span>
                    <span className='tag'>AWS</span>
                </div>

                {/* Project Images Gallery */}
                <div className='project-images-gallery'>
                    <div className='gallery-image'>
                        <img src={calmmindImage} alt="CalmMind Home Screen" />
                    </div>
                    <div className='gallery-image'>
                        <img src={calmmindImageTwo} alt="CalmMind Affirmation" />
                    </div>
                    <div className='gallery-image'>
                        <img src={calmmindImageThree} alt="CalmMind Features" />
                    </div>
                </div>

                {/* Project Details Grid */}
                <div className='project-details-grid'>
                    <div className='detail-item'>
                        <h4>ROLE</h4>
                        <p>Full-Stack Developer</p>
                    </div>
                    <div className='detail-item'>
                        <h4>TIMELINE</h4>
                        <p>2025</p>
                    </div>
                    <div className='detail-item'>
                        <h4>ORGANIZATION</h4>
                        <p>Academic Project</p>
                    </div>
                </div>

                {/* Overview Section */}
                <section className='project-section'>
                    <h2>Overview</h2>
                    <p>
                        CalmMind is a mental health support application grounded in attachment theory 
                        psychology. The platform implements the scientifically-validated Experiences in 
                        Close Relationships-Revised (ECR-R) questionnaire to assess users' attachment 
                        styles and provide personalized mental health resources and support.
                    </p>
                </section>

                {/* The Challenge */}
                <section className='project-section'>
                    <h2>The challenge</h2>
                    <p>
                        Mental health applications often provide generic advice that doesn't account for 
                        individual psychological profiles. There was a need for a platform that could 
                        scientifically assess users' attachment patterns and deliver personalized support 
                        while maintaining the highest security and privacy standards for sensitive health 
                        data.
                    </p>
                </section>

                {/* Key Problems */}
                <section className='project-section'>
                    <h3>Key Problems Addressed:</h3>
                    <div className='problems-box'>
                        <ul className='problems-list'>
                            <li>Generic mental health advice lacking personalization</li>
                            <li>Need for scientifically-validated psychological assessment</li>
                            <li>Secure handling of sensitive health information</li>
                            <li>User-friendly interface for vulnerable populations</li>
                        </ul>
                    </div>
                </section>

                {/* Solution */}
                <section className='project-section'>
                    <h2>Solution</h2>
                    <p>
                        I developed a full-stack application with React Native for the mobile frontend and Spring Boot 
                        for the backend. The system implements the ECR-R questionnaire, processes results using 
                        validated psychological scoring algorithms, and delivers personalized content based on 
                        attachment styles.
                    </p>
                </section>

                {/* Technical Features Grid */}
                <div className='features-grid'>
                    <div className='feature-card'>
                        <h3>Backend Architecture</h3>
                        <ul>
                            <li>RESTful API with Spring Boot</li>
                            <li>JWT authentication and authorization</li>
                            <li>OpenAI integration for personalized content</li>
                            <li>MySQL database with encrypted sensitive data</li>
                        </ul>
                    </div>

                    <div className='feature-card'>
                        <h3>Psychological Assessment</h3>
                        <ul>
                            <li>ECR-R questionnaire implementation</li>
                            <li>Scientifically-validated scoring algorithms</li>
                            <li>4 attachment style categorizations</li>
                            <li>Progress tracking over time</li>
                        </ul>
                    </div>

                    <div className='feature-card full-width'>
                        <h3>Mobile Application</h3>
                        <ul>
                            <li>React Native for iOS and Android</li>
                            <li>Responsive UI with smooth animations</li>
                            <li>Offline support with local data caching</li>
                            <li>Push notifications for reminders</li>
                        </ul>
                    </div>
                </div>

                {/* Impact & Results */}
                <section className='project-section'>
                    <h2>Impact & Results</h2>
                </section>

                <div className='impact-grid'>
                    <div className='impact-card'>
                        <h3 className='impact-number'>ECR-R</h3>
                        <p>Validated questionnaire</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>&lt;100%</h3>
                        <p>Secure data handling</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>4</h3>
                        <p>Attachment styles</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>OAuth2</h3>
                        <p>Enterprise security</p>
                    </div>
                </div>

                {/* Contact Footer */}
                <div className='project-footer'>
                    <div className='footer-left'>
                        <h3>Ahmad Bishara</h3>
                        <p>Full-Stack Software Engineer building scalable digital experiences</p>
                    </div>
                    <div className='footer-right'>
                        <h4>Connect</h4>
                        <div className='footer-contact'>
                            <p>Bishara.a@northeastern.edu</p>
                            <p>978-810-7418</p>
                            <p>Boston, MA</p>
                        </div>
                    </div>
                </div>

                <div className='copyright'>
                    <p>© 2025 Ahmad Bishara. Built with React, TypeScript, and Tailwind CSS.</p>
                </div>
            </div>
        </div>
    );
}

export default CalmMindPage;