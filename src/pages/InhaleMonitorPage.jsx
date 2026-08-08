import React from 'react';
import '../components/ProjectDetailsPage.css';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import breathingBuddyDevice from '../assets/BreathingBuddyDevice.jpg';
import breathingBuddySpacer from '../assets/BreathingBuddySpacer.jpg';

function InhaleMonitorPage() {
    return (
        <div className='projects-page'>
            <div className='projects-container'>
                {/* Back button */}
                <Link to="/projects" className='back-link'>
                    <FaArrowLeft /> Back to projects
                </Link>

                {/* Project Header */}
                <h1 className='project-title'>Breathing Buddy — Real-Time Inhale Pressure Monitor</h1>
                <p className='project-subtitle'>
                    An embedded pediatric device that measures inhaler technique in real time and
                    gamifies the experience for children — with cartoon feedback, boat animations,
                    and a 3-strikes emergency alert.
                </p>

                {/* Tech Stack Tags */}
                <div className='tech-tags'>
                    <span className='tag'>C++</span>
                    <span className='tag'>Arduino Framework</span>
                    <span className='tag'>ESP32-S3</span>
                    <span className='tag'>I2C</span>
                    <span className='tag'>I2S Audio</span>
                    <span className='tag'>Embedded</span>
                </div>

                {/* Project Image */}
                <div className='project-image-container'>
                    <img src={breathingBuddyDevice} alt="Breathing Buddy device — LCD showing the Ready screen with happy face" className='project-image'/>
                </div>

                {/* External Link */}
                <div className='youtube-link'>
                    <a href='https://github.com/ahmadb123/Arduino_Project'
                       target='_blank' rel='noopener noreferrer'>
                        <FaGithub /> View Source on GitHub <FaExternalLinkAlt />
                    </a>
                </div>

                {/* Project Details Grid */}
                <div className='project-details-grid'>
                    <div className='detail-item'>
                        <h4>ROLE</h4>
                        <p>Firmware & Product Co-Developer</p>
                    </div>
                    <div className='detail-item'>
                        <h4>COLLABORATOR</h4>
                        <p>Allison Barreto-Portillo</p>
                    </div>
                    <div className='detail-item'>
                        <h4>TIMELINE</h4>
                        <p>2025</p>
                    </div>
                </div>

                {/* Overview Section */}
                <section className='project-section'>
                    <h2>Overview</h2>
                    <p>
                        Breathing Buddy is a standalone embedded device designed to teach children
                        how to use asthma inhalers correctly. The user inhales through a tube
                        connected to a pressure sensor; the device measures the pressure drop,
                        classifies the inhale strength, and gives immediate visual and audio feedback
                        on a 3.5" color LCD — no computer or phone required.
                    </p>
                </section>

                {/* The Challenge */}
                <section className='project-section'>
                    <h2>The challenge</h2>
                    <p>
                        Pediatric asthma inhaler technique is notoriously bad. Kids don't inhale
                        hard enough or long enough, and clinicians can't easily verify technique
                        outside the office. Traditional peak-flow meters are boring, produce
                        numbers kids don't understand, and don't reinforce the correct habit —
                        the deep, sustained inhale that actually delivers medication.
                    </p>
                </section>

                {/* Solution */}
                <section className='project-section'>
                    <h2>Solution</h2>
                    <p>
                        A standalone ESP32-S3 device with a color LCD, pressure sensor, and audio
                        codec — running custom C++ firmware that turns inhaler practice into a
                        game. Weak, moderate, or strong inhales get color-coded feedback with
                        cartoon faces. A successful "strong" inhale unlocks a 10-second
                        hold-breath phase animated as a boat sailing across a river, then a
                        60-second relax phase with a night sky that gradually fills with stars.
                        Three failed attempts trigger an emergency alert screen and siren.
                    </p>
                </section>

                {/* Technical Features Grid */}
                <div className='features-grid'>
                    <div className='feature-card'>
                        <h3>Hardware</h3>
                        <ul>
                            <li>ESP32-S3 (Xtensa LX7 dual-core, 240 MHz)</li>
                            <li>Adafruit MPRLS pressure sensor (0–25 PSI, I2C)</li>
                            <li>3.5" IPS LCD, 320×480, AXS15231B controller (QSPI)</li>
                            <li>ES8311 audio codec with I2S output</li>
                            <li>TCA9554 I/O expander for LCD reset control</li>
                        </ul>
                    </div>

                    <div className='feature-card'>
                        <h3>Firmware</h3>
                        <ul>
                            <li>Real-time pressure reading via raw I2C (no third-party sensor library)</li>
                            <li>Peak-tracking loop over a 10-second inhale window</li>
                            <li>Automatic baseline calibration (20-sample average on boot)</li>
                            <li>Configurable inhale-strength thresholds (weak / moderate / strong)</li>
                            <li>Manages three I2C buses (codec, sensor, display) on shared pins</li>
                        </ul>
                    </div>

                    <div className='feature-card full-width'>
                        <h3>UX Designed for Kids</h3>
                        <ul>
                            <li>Cartoon faces (happy, meh, sad) instead of numbers</li>
                            <li>Animated boat sails across a river during the 10s hold-breath phase</li>
                            <li>Night-sky "relax" mode where stars appear progressively over 60s</li>
                            <li>Distinct audio jingles for each state: fanfare, buzzer, encouragement, alarm</li>
                            <li>3-strikes emergency screen prompts the child to go get help</li>
                        </ul>
                    </div>
                </div>

                {/* Hardware detail gallery */}
                <div className='project-images-gallery'>
                    <div className='gallery-image'>
                        <img src={breathingBuddySpacer} alt="Pediatric asthma spacer with rescue inhaler connected to the pressure sensor tube" />
                    </div>
                </div>

                {/* Impact & Results */}
                <section className='project-section'>
                    <h2>Impact & Results</h2>
                </section>

                <div className='impact-grid'>
                    <div className='impact-card'>
                        <h3 className='impact-number'>Standalone</h3>
                        <p>Runs on USB or LiPo — no phone required</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>3-Strike</h3>
                        <p>Emergency alert for failed attempts</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>~1s</h3>
                        <p>Boot-to-ready calibration</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>3.5"</h3>
                        <p>Color LCD with custom animated UI</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InhaleMonitorPage;
