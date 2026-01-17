import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiCalendar } from 'react-icons/fi';
import Section from '../components/common/Section/Section';
import { experiences, education } from '../data/experience';
import './Experience.css';

const TimelineItem = ({ experience, index }) => {
    return (
        <motion.div
            className="timeline__item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="timeline__dot" />
            <div className="timeline__date">
                {experience.startDate} — {experience.endDate}
            </div>
            <div className="timeline__card">
                <div className="timeline__header">
                    <h3 className="timeline__role">{experience.role}</h3>
                    <p className="timeline__company">{experience.company}</p>
                    <div className="timeline__meta">
                        <span className="timeline__meta-item">
                            <FiMapPin /> {experience.location}
                        </span>
                        <span className="timeline__meta-item">
                            <FiBriefcase /> {experience.type}
                        </span>
                    </div>
                </div>

                <p className="timeline__description">{experience.description}</p>

                <div className="timeline__achievements">
                    <p className="timeline__achievements-title">Key Achievements</p>
                    <ul className="timeline__achievements-list">
                        {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                        ))}
                    </ul>
                </div>

                <div className="timeline__tech">
                    {experience.technologies.map((tech) => (
                        <span key={tech} className="timeline__tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <div className="experience-page">
            <Section>
                <Section.Header
                    title="Experience"
                    subtitle="My professional journey and the places where I've honed my skills."
                />

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>

                <div className="experience__education">
                    <h3>
                        Education
                        <span />
                    </h3>
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            className="education-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4 className="education-card__degree">{edu.degree}</h4>
                            <p className="education-card__institution">{edu.institution}</p>
                            <div className="education-card__meta">
                                <span><FiCalendar /> {edu.startDate} — {edu.endDate}</span>
                                <span><FiMapPin /> {edu.location}</span>
                                {edu.gpa && <span>GPA: {edu.gpa}</span>}
                            </div>
                            <ul className="education-card__highlights">
                                {edu.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Experience;
