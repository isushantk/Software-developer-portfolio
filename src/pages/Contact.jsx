import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiMail, FiMapPin, FiClock, FiSend, FiCheck,
    FiGithub, FiLinkedin, FiTwitter
} from 'react-icons/fi';
import Section from '../components/common/Section/Section';
import Button from '../components/common/Button/Button';
import { socialLinks, contactInfo } from '../data/social';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <Section>
                <Section.Header
                    title="Get In Touch"
                    subtitle="Have a project in mind or just want to say hello? Feel free to reach out!"
                />

                <div className="contact__grid">
                    <motion.div
                        className="contact__form-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {isSuccess ? (
                            <div className="contact__success">
                                <div className="contact__success-icon">
                                    <FiCheck />
                                </div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <Button
                                    variant="secondary"
                                    onClick={() => setIsSuccess(false)}
                                    style={{ marginTop: '1.5rem' }}
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-group__label">
                                        Name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-group__input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && (
                                        <span className="form-group__error">{errors.name}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-group__label">
                                        Email <span>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-group__input"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <span className="form-group__error">{errors.email}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-group__label">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-group__input"
                                        placeholder="Project Inquiry"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-group__label">
                                        Message <span>*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        className="form-group__textarea"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && (
                                        <span className="form-group__error">{errors.message}</span>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    icon={FiSend}
                                    iconPosition="right"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </motion.div>

                    <motion.div
                        className="contact__info"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="contact__info-header">
                            <h3>Let's work together</h3>
                            <p>
                                I'm always open to discussing new projects, creative ideas,
                                or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="contact__details">
                            <div className="contact__detail-item">
                                <div className="contact__detail-icon">
                                    <FiMail />
                                </div>
                                <div className="contact__detail-content">
                                    <h4>Email</h4>
                                    <p>
                                        <a href={`mailto:${contactInfo.email}`}>
                                            {contactInfo.email}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact__detail-item">
                                <div className="contact__detail-icon">
                                    <FiMapPin />
                                </div>
                                <div className="contact__detail-content">
                                    <h4>Location</h4>
                                    <p>{contactInfo.location}</p>
                                </div>
                            </div>

                            <div className="contact__detail-item">
                                <div className="contact__detail-icon">
                                    <FiClock />
                                </div>
                                <div className="contact__detail-content">
                                    <h4>Response Time</h4>
                                    <p>{contactInfo.responseTime}</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact__status">
                            <span className="contact__status-dot" />
                            {contactInfo.availability}
                        </div>

                        <div className="contact__social">
                            <h4>Connect with me</h4>
                            <div className="contact__social-links">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        className="contact__social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
