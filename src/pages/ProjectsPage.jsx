import React from 'react';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';
import gamerhubImage from '../assets/GamerHubImg.png';
import calmmindImage from '../assets/CalmmindImg.png';
import syngapImage from '../assets/Syngap1Img1.png';
import breathingBuddyImage from '../assets/BreathingBuddyDevice.jpg';

function ProjectsPage() {
    const projects = [
        {
            id: 0,
            title: "SYNGAP1 Mutation Viewer",
            description: "Deployed as SynGAP Research Fund's primary rare-disease analytics tool. Featured in Endicott College News.",
            image: syngapImage,
            tags: ["Python", "Pandas", "Flask", "Plotly", "R / Shiny"],
            link: "/projects/syngap1",
            featured: true
        },
        {
            id: 1,
            title: "Breathing Buddy — Inhale Monitor",
            description: "Embedded pediatric inhaler-technique device on ESP32-S3, with C++ firmware, animated LCD feedback, and a 3-strikes emergency alert.",
            image: breathingBuddyImage,
            tags: ["C++", "ESP32-S3", "Arduino", "Embedded", "I2C"],
            link: "/projects/inhale-monitor",
            featured: true
        },
        {
            id: 2,
            title: "GamerHub",
            description: "Social gaming platform connecting players across Xbox, PlayStation, and Steam",
            image: gamerhubImage,
            tags: ["Java", "Spring Boot", "React Native", "OAuth2", "AWS"],
            link: "/projects/gamerhub",
            featured: true
        },
        {
            id: 3,
            title: "CalmMind",
            description: "Mental health application providing personalized support based on attachment theory",
            image: calmmindImage,
            tags: ["React Native", "Spring Boot", "OpenAI API", "MySQL", "JWT"],
            link: "/projects/calmmind",
            featured: true
        },
    ];

    return (
        <div className='projects-listing-page'>
            <div className='projects-listing-container'>
                {/* Header */}
                <div className='projects-header'>
                    <h1 className='projects-main-title'>
                        My <span className='highlight'>Projects</span>
                    </h1>
                    <p className='projects-main-subtitle'>
                        A collection of full-stack applications built to solve real-world problems
                    </p>
                </div>

                {/* Projects Grid */}
                <div className='projects-grid'>
                    {projects.map((project) => (
                        <Link 
                            to={project.link} 
                            key={project.id} 
                            className='project-card'
                        >
                            <div className='project-card-image'>
                                <img src={project.image} alt={project.title} />
                                {project.featured && <span className='featured-badge'>Featured</span>}
                            </div>
                            <div className='project-card-content'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className='project-card-tags'>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className='project-tag'>{tag}</span>
                                    ))}
                                </div>
                                <div className='view-project-link'>
                                    View Project →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;