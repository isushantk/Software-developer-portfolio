import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiUser } from 'react-icons/fi';
import Button from '../../common/Button/Button';
import './Hero.css';

const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Open Source Contributor',
];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section className="hero">
            <div className="hero__background">
                <div className="hero__grid" />
                <div className="hero__glow hero__glow--primary" />
                <div className="hero__glow hero__glow--secondary" />
            </div>

            <div className="hero__container">
                <div className="hero__layout">
                    <motion.div
                        className="hero__content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p className="hero__greeting" variants={itemVariants}>
                            Hi, my name is
                        </motion.p>

                        <motion.h1 className="hero__name" variants={itemVariants}>
                            Sushant Kumar.
                        </motion.h1>

                        <motion.h2 className="hero__title" variants={itemVariants}>
                            <span className="hero__title-static">I'm a</span>
                            <span className="hero__title-dynamic">
                                {displayText}
                                <span className="hero__cursor" />
                            </span>
                        </motion.h2>

                        <motion.p className="hero__description" variants={itemVariants}>
                            I build exceptional digital experiences that combine clean code with
                            stunning design. Currently focused on building accessible, human-centered
                            products that make a difference.
                        </motion.p>

                        <motion.div className="hero__actions" variants={itemVariants}>
                            <Link to="/projects">
                                <Button variant="primary" icon={FiArrowRight} iconPosition="right">
                                    View My Work
                                </Button>
                            </Link>
                            <Button
                                variant="secondary"
                                icon={FiDownload}
                                href="/resume.pdf"
                                target="_blank"
                            >
                                Download CV
                            </Button>
                        </motion.div>

                        <motion.div className="hero__stats" variants={itemVariants}>
                            <div className="hero__stat">
                                <div className="hero__stat-value">3+</div>
                                <div className="hero__stat-label">Years Experience</div>
                            </div>
                            <div className="hero__stat">
                                <div className="hero__stat-value">20+</div>
                                <div className="hero__stat-label">Projects Completed</div>
                            </div>
                            <div className="hero__stat">
                                <div className="hero__stat-value">15+</div>
                                <div className="hero__stat-label">Happy Clients</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Photo */}
                    <motion.div
                        className="hero__photo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="hero__photo-wrapper">
                            <img src={`${import.meta.env.BASE_URL}profile-photo.jpg`} alt="Sushant Kumar" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="hero__scroll">
                <span>Scroll</span>
                <div className="hero__scroll-icon" />
            </div>
        </section>
    );
};

export default Hero;
