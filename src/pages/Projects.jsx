import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolder } from 'react-icons/fi';
import Section from '../components/common/Section/Section';
import ProjectCard from '../components/sections/ProjectCard/ProjectCard';
import { projects, projectCategories } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    const stats = {
        total: projects.length,
        featured: projects.filter((p) => p.featured).length,
        categories: [...new Set(projects.map((p) => p.category))].length,
    };

    return (
        <div className="projects-page">
            <Section>
                <Section.Header
                    title="Projects"
                    subtitle="A selection of projects I've worked on, from full-stack applications to developer tools."
                />

                <div className="projects__stats">
                    <div className="projects__stat">
                        <div className="projects__stat-value">{stats.total}</div>
                        <div className="projects__stat-label">Total Projects</div>
                    </div>
                    <div className="projects__stat">
                        <div className="projects__stat-value">{stats.featured}</div>
                        <div className="projects__stat-label">Featured</div>
                    </div>
                    <div className="projects__stat">
                        <div className="projects__stat-value">{stats.categories}</div>
                        <div className="projects__stat-label">Categories</div>
                    </div>
                </div>

                <div className="projects__filters">
                    {projectCategories.map((category) => (
                        <motion.button
                            key={category.key}
                            className={`projects__filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category.key)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.label}
                        </motion.button>
                    ))}
                </div>

                <motion.div layout className="projects__grid">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="projects__empty">
                        <FiFolder className="projects__empty-icon" />
                        <p>No projects found in this category.</p>
                    </div>
                )}
            </Section>
        </div>
    );
};

export default Projects;
