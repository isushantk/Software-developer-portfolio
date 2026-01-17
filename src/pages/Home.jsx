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
                                    a passionate software engineer based in India with a love for building
                                    elegant solutions to complex problems.
                                </p>
                                <p>
                                    I specialize in creating <span className="home__about-highlight">full-stack web applications</span> that
                                    are not only functional but also provide exceptional user experiences.
                                    My journey in tech began with curiosity and has evolved into a career
                                    focused on innovation and continuous learning.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies,
                                    contributing to open-source projects, or sharing knowledge with
                                    the developer community.
                                </p>
                            </div>
                            <div className="home__about-highlights">
                                <div className="home__about-highlight-card">
                                    <span className="home__about-highlight-icon">🎯</span>
                                    <h4>Problem Solver</h4>
                                    <p>I love tackling complex challenges and finding efficient solutions</p>
                                </div>
                                <div className="home__about-highlight-card">
                                    <span className="home__about-highlight-icon">💡</span>
                                    <h4>Continuous Learner</h4>
                                    <p>Always exploring new technologies and best practices</p>
                                </div>
                                <div className="home__about-highlight-card">
                                    <span className="home__about-highlight-icon">🤝</span>
                                    <h4>Team Player</h4>
                                    <p>Collaborative mindset with strong communication skills</p>
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
