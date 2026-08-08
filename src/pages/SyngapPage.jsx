import React from 'react';
import '../components/ProjectDetailsPage.css';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import syngapImageOne from '../assets/Syngap1Img1.png';
import syngapImageTwo from '../assets/Syngap1Img2.png';
import syngapImageThree from '../assets/Syngap1Img3.png';

function SyngapPage() {
    return (
        <div className='projects-page'>
            <div className='projects-container'>
                {/* Back button */}
                <Link to="/projects" className='back-link'>
                    <FaArrowLeft /> Back to projects
                </Link>

                {/* Project Header */}
                <h1 className='project-title'>SYNGAP1 Mutation Viewer</h1>
                <p className='project-subtitle'>
                    Genomic analytics for rare-disease research — deployed at SynGAP Research Fund,
                    covered by Endicott College News.
                </p>

                {/* Tech Stack Tags */}
                <div className='tech-tags'>
                    <span className='tag'>Python</span>
                    <span className='tag'>Pandas</span>
                    <span className='tag'>Flask</span>
                    <span className='tag'>Plotly</span>
                    <span className='tag'>R / Shiny</span>
                </div>

                {/* Project Image */}
                <div className='project-image-container'>
                    <img src={syngapImageOne} alt="SYNGAP1 Mutation Viewer" className='project-image'/>
                </div>

                {/* External Links */}
                <div className='youtube-link'>
                    <a href='https://stem.endicott.edu/jk-shiny/SyngapVariants/'
                       target='_blank' rel='noopener noreferrer'>
                        View Live Tool <FaExternalLinkAlt />
                    </a>
                </div>
                <div className='youtube-link'>
                    <a href='https://www.endicott.edu/news-events/news/news-articles/2025/03/coding-for-a-cure'
                       target='_blank' rel='noopener noreferrer'>
                        Read Endicott News Feature <FaExternalLinkAlt />
                    </a>
                </div>

                {/* Project Details Grid */}
                <div className='project-details-grid'>
                    <div className='detail-item'>
                        <h4>ROLE</h4>
                        <p>Bioinformatics & Software Development Intern</p>
                    </div>
                    <div className='detail-item'>
                        <h4>TIMELINE</h4>
                        <p>Sep 2024 – Jan 2025</p>
                    </div>
                    <div className='detail-item'>
                        <h4>ORGANIZATION</h4>
                        <p>SynGAP Research Fund</p>
                    </div>
                </div>

                {/* Overview Section */}
                <section className='project-section'>
                    <h2>Overview</h2>
                    <p>
                        SYNGAP1 is a rare genetic condition affecting a small documented patient population
                        worldwide. Researchers and families needed a way to see, filter, and understand
                        thousands of mutation variants — without a bioinformatics degree. I built the
                        primary tool they now use.
                    </p>
                </section>

                {/* The Challenge */}
                <section className='project-section'>
                    <h2>The challenge</h2>
                    <p>
                        Genomic data was scattered across CSVs, journal supplements, and biorepositories.
                        There was no single interface researchers or affected families could use to
                        explore SYNGAP1 variants by type, position, or clinical characteristics — much
                        less do it in under a second.
                    </p>
                </section>

                {/* Solution */}
                <section className='project-section'>
                    <h2>Solution</h2>
                    <p>
                        I built Python/Pandas + R pipelines processing 10,000+ genomic variants, and
                        shipped an interactive Flask + Plotly application with sub-second query
                        performance over 5,000+ variants. The tool went live as SynGAP Research Fund's
                        primary analytics interface and was presented to 80+ clinicians at the SRF 2024
                        Conference.
                    </p>
                </section>

                {/* Feature grid */}
                <div className='features-grid'>
                    <div className='feature-card'>
                        <h3>Data Pipeline</h3>
                        <ul>
                            <li>Python + Pandas ingestion of 10K+ genomic variants</li>
                            <li>R scripts for statistical variant annotation</li>
                            <li>Automated updates as new variants are catalogued</li>
                        </ul>
                    </div>

                    <div className='feature-card'>
                        <h3>Interactive Interface</h3>
                        <ul>
                            <li>Filter by mutation type (frameshift, nonsense, missense, intronic)</li>
                            <li>Genomic position mapping with color-coded variant types</li>
                            <li>Detailed per-variant view: cDNA, patient count, biorepository availability</li>
                        </ul>
                    </div>

                    <div className='feature-card full-width'>
                        <h3>Adoption</h3>
                        <ul>
                            <li>Deployed as SynGAP Research Fund's primary analytics interface</li>
                            <li>Presented to 80+ clinicians at the SRF 2024 Conference</li>
                            <li>Featured in Endicott College News: "Coding for a Cure"</li>
                        </ul>
                    </div>
                </div>

                {/* Screenshots */}
                <div className='project-images-gallery'>
                    <div className='gallery-image'>
                        <img src={syngapImageTwo} alt="Gene Visualization" />
                    </div>
                    <div className='gallery-image'>
                        <img src={syngapImageThree} alt="Mutation Details" />
                    </div>
                </div>

                {/* Impact & Results */}
                <section className='project-section'>
                    <h2>Impact & Results</h2>
                </section>

                <div className='impact-grid'>
                    <div className='impact-card'>
                        <h3 className='impact-number'>5,000+</h3>
                        <p>Variants queryable</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>Sub-second</h3>
                        <p>Query performance</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>80+</h3>
                        <p>Clinicians at SRF 2024</p>
                    </div>
                    <div className='impact-card'>
                        <h3 className='impact-number'>Primary</h3>
                        <p>Analytics interface at SRF</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SyngapPage;
