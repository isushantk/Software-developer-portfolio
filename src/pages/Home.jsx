import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUser } from 'react-icons/fi';
import Hero from '../components/sections/Hero/Hero';
import ProjectCard from '../components/sections/ProjectCard/ProjectCard';
import Button from '../components/common/Button/Button';
import { projects } from '../data/projects';
import './Home.css';

const Home = () => {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

    return (
        <>
            <Hero />

            {/* About Section */}
            <section className="home__about">
                <div className="home__about-container">
                    <motion.div
                        className="home__about-content"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>About Me</h2>
                        <div className="home__about-grid">
                            <div className="home__about-text">
                                <p>
                                    Hello! I'm <span className="home__about-highlight">Sushant Kumar</span>,
                                    a Computer Science Engineering undergraduate at <span className="home__about-highlight">NITK Surathkal</span> with
                                    strong foundations in C++, data structures, and object-oriented programming.
                                </p>
                                <p>
                                    I have hands-on experience in <span className="home__about-highlight">full-stack and backend development</span>,
                                    proficient in JavaScript, Python, SQL, Node.js, React, and MongoDB. I've worked with
                                    REST APIs, Docker, and cloud deployment using AWS and Vercel.
                                </p>
                                <p>
                                    A proactive problem-solver with demonstrated leadership experience, I combine
                                    technical expertise and cross-functional collaboration to deliver scalable,
                                    secure, and high-impact software solutions.
                                </p>
                            </div>
                            <div className="home__about-highlights">
                                <div className="home__about-highlight-card">
                                    <span className="home__about-highlight-icon">🎯</span>
                                    <h4>Problem Solver</h4>
                                    <p>Strong analytical thinking with logical reasoning skills</p>
                                </div>
                                <div className="home__about-highlight-card">
                                    <span className="home__about-highlight-icon">💼</span>
                                    <h4>MERN Stack Developer</h4>
                                    <p>Experienced in building full-stack web applications</p>
                                </div>
                                <div className="home__about-highlight-card">
                                    <span className="home__about-highlight-icon">🤝</span>
                                    <h4>Leadership</h4>
                                    <p>Head of Marketing at E-Cell & Treasurer at ACE</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="home__featured">
                <div className="container">
                    <div className="home__featured-header">
                        <div className="home__featured-title">
                            <h2>Featured Projects</h2>
                        </div>
                        <Link to="/projects" className="home__featured-link">
                            View All Projects <FiArrowRight />
                        </Link>
                    </div>
                    <div className="home__featured-grid">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home__cta">
                <motion.div
                    className="home__cta-container"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Get In Touch</h2>
                    <p>
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" size="lg">
                            Say Hello
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </>
    );
};

export default Home;
