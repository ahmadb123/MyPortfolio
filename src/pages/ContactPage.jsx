import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import './ContactPage.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setError('');
        
        // EmailJS configuration - REPLACE THESE VALUES
        emailjs.send(
            'service_ii763ie',              
            'template_ovw58e7',             // Replace with your Template ID from EmailJS
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            },
            'GhQ0JwPnDn0WBlm_V'               // Replace with your Public Key from EmailJS
        )
        .then(() => {
            setSending(false);
            setSubmitted(true);
            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 3000);
        })
        .catch((error) => {
            setSending(false);
            console.error('Failed to send:', error);
            setError('Failed to send message. Please try again or email me directly.');
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1 className="contact-title">Get in <span className="highlight">Touch</span></h1>
                <p className="contact-subtitle">
                    Have a project in mind? Let's discuss how we can work together
                </p>
            </div>

            <div className="contact-container">
                {/* Left side - Contact Info */}
                <div className="contact-left">
                    <h2>Let's connect</h2>
                    <p className="connect-description">
                        I'm currently open to freelance opportunities, full-time positions, 
                        and interesting collaborations. Feel free to reach out through any of these channels.
                    </p>

                    <div className="contact-methods">
                        <div className="contact-method">
                            <div className="method-icon">
                                <FaEnvelope />
                            </div>
                            <div className="method-details">
                                <h4>Email</h4>
                                <a href="mailto:Bishara.a@northeastern.edu">
                                    Bishara.a@northeastern.edu
                                </a>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="method-icon">
                                <FaPhone />
                            </div>
                            <div className="method-details">
                                <h4>Phone</h4>
                                <p>978-810-7418</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="method-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="method-details">
                                <h4>Location</h4>
                                <p>Boston, MA</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-section">
                        <h3>Find me on</h3>
                        <div className="social-icons">
                            <a href="https://github.com/ahmadb123" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/ahmad-bishara-1b4a20250" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side - Contact Form */}
                <div className="contact-right">
                    <div className="form-header">
                        <h3>Send a message</h3>
                    </div>

                    {submitted ? (
                        <div className="success-message">
                            <h3>✓ Message sent successfully!</h3>
                            <p>Thank you for reaching out. I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    disabled={sending}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    disabled={sending}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder="What's this about?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required 
                                    disabled={sending}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="6"
                                    placeholder="Tell me about your project"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={sending}
                                ></textarea>
                            </div>

                            {error && <p className="error-message">{error}</p>}

                            <button type="submit" className="submit-btn" disabled={sending}>
                                {sending ? 'Sending...' : 'Send message'} <FaPaperPlane />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactPage;