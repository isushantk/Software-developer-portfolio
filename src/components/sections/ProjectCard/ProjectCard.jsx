import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index = 0 }) => {
    const { title, description, technologies, github, demo, featured } = project;

    return (
        <motion.article
            className={`project-card ${featured ? 'project-card--featured' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="project-card__image">
                <div className="project-card__image-placeholder">
                    <FiFolder />
                </div>
                <div className="project-card__overlay">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__overlay-btn"
                            aria-label="View on GitHub"
                        >
                            <FiGithub />
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__overlay-btn"
                            aria-label="View live demo"
                        >
                            <FiExternalLink />
                        </a>
                    )}
                </div>
            </div>

            <div className="project-card__content">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__description">{description}</p>
                <div className="project-card__tags">
                    {technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="project-card__tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
