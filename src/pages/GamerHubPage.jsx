import React from 'react';
import '../components/ProjectDetailsPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gamerhubImage from '../assets/GamerHubImg.png';

function GamerHubPage() {
    return (
        <div className='projects-page'>
            <div className='projects-container'>
                {/* Back button */}
                <Link to="/projects" className='back-link'>
                    <FaArrowLeft /> Back to projects
                </Link>

                {/* Project Header */}
                <h1 className='project-title'>GamerHub</h1>
                <p className='project-subtitle'>
                    Social gaming platform connecting players across Xbox, PlayStation, and Steam
                </p>

                {/* Tech Stack Tags */}
                <div className='tech-tags'>
                    <span className='tag'>Java</span>
                    <span className='tag'>Spring Boot</span>
                    <span className='tag'>React Native</span>
                    <span className='tag'>OAuth2</span>
                    <span className='tag'>AWS</span>
                </div>

                {/* Project Image */}
                <div className='project-image-container'>
                    <img src={gamerhubImage} alt="GamerHub Screenshot" className='project-image'/>
                </div>

                {/* Project Details Grid */}
                <div className='project-details-grid'>
                    <div className='detail-item'>
                        <h4>ROLE</h4>
                        <p>Full-Stack Developer</p>
                    </div>
                    <div className='detail-item'>
                        <h4>TIMELINE</h4>
                        <p>2024</p>
                    </div>
                    <div className='detail-item'>
                        <h4>ORGANIZATION</h4>
                        <p>Personal Project</p>
                    </div>
                </div>

                {/* Overview Section */}
                <section className='project-section'>
                    <h2>Overview</h2>
                    <p>
                        GamerHub is a cross-platform social network that brings gamers together regardless 
                        of their gaming platform. The application allows users to connect their Xbox, 
                        PlayStation, and Steam accounts, find friends, and communicate in real-time through 
                        an integrated messaging system.
                    </p>
                </section>

                {/* The Challenge */}
                <section className='project-section'>
                    <h2>The challenge</h2>
                    <p>
                        Gamers often play on multiple platforms but lack a unified way to connect with 
                        friends across different gaming ecosystems. Each platform has its own social 
                        features, but there was no solution to bridge these platforms together while 
                        maintaining security and real-time communication.
                    </p>
                </section>

                {/* Key Problems */}
                <section className='project-section'>
                    <h3>Key Problems Addressed:</h3>
                    <ul className='problems-list'>
                        <li>Fragmented social experience across gaming platforms</li>
                        <li>Need for secure OAuth2 integration with multiple providers</li>
                        <li>Real-time messaging requirements with minimal latency</li>
                        <li>Scalability to handle 1,000+ concurrent users</li>
                    </ul>
                </section>

                {/* Solution */}
                <section className='project-section'>
                    <h2>Solution</h2>
                    <p>
                        I built a microservices architecture using Spring Boot for the backend, with a React Native 
                        mobile app for cross-platform compatibility. The system integrates OAuth2 
                        authentication for Xbox, PlayStation, and Steam, and implements STOMP WebSockets for 
                        real-time messaging.
                    </p>
                </section>

                {/* Technical Features Grid */}
                <div className='features-grid'>
                    <div className='feature-card'>
                        <h3>Backend Architecture</h3>
                        <ul>
                            <li>Microservices with Spring Boot and Spring Cloud</li>
                            <li>OAuth2 integration with multiple gaming platforms</li>
                            <li>MySQL database with Redis caching</li>
                            <li>AWS deployment with auto-scaling</li>
                        </ul>
                    </div>

                    <div className='feature-card'>
                        <h3>Real-Time Features</h3>
                        <ul>
                            <li>STOMP WebSocket protocol for messaging</li>
                            <li>Online status management</li>
                            <li>Push notifications for messages</li>
                            <li>Typing indicators and read receipts</li>
                        </ul>
                    </div>

                    <div className='feature-card full-width'>
                        <h3>Mobile Application</h3>
                        <ul>
                            <li>Cross-platform React Native app</li>
                            <li>Responsive UI with smooth animations</li>
                            <li>Offline support with data synchronization</li>
                            <li>Push notifications via Firebase Cloud Messaging</li>
                        </ul>
                    </div>
                </div>

                {/* Impact & Results */}
                <section className='project-section'>
                    <h2>Impact & Results</h2>
                </section>

                <div className='impact-grid'>
                    <div className='impact-card'>
                        <h3 className='impact-number'>1,000+</h3>
                        <p>Concurrent users supported</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>&lt;100ms</h3>
                        <p>Message latency</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>3</h3>
                        <p>Platform integrations</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>OAuth2</h3>
                        <p>Secure authentication</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GamerHubPage;