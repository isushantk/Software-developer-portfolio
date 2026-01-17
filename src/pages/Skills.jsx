import { motion } from 'framer-motion';
import {
    FiCode, FiLayout, FiServer, FiDatabase, FiTool
} from 'react-icons/fi';
import {
    SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs,
    SiMongodb, SiPostgresql, SiDocker, SiGit, SiAmazonwebservices
} from 'react-icons/si';
import Section from '../components/common/Section/Section';
import { skills, skillCategories } from '../data/skills';
import './Skills.css';

const iconMap = {
    FiCode: FiCode,
    FiLayout: FiLayout,
    FiServer: FiServer,
    FiDatabase: FiDatabase,
    FiTool: FiTool,
};

const SkillCategory = ({ category, index }) => {
    const Icon = iconMap[category.icon] || FiCode;
    const categorySkills = skills[category.key] || [];

    return (
        <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="skill-category__header">
                <div className="skill-category__icon">
                    <Icon />
                </div>
                <h3 className="skill-category__title">{category.title}</h3>
            </div>
            <div className="skill-category__tags">
                {categorySkills.map((skill, i) => (
                    <motion.span
                        key={skill.name}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {skill.name}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const topTech = [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Python', icon: SiPython },
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Docker', icon: SiDocker },
        { name: 'Git', icon: SiGit },
        { name: 'AWS', icon: SiAmazonwebservices },
    ];

    return (
        <div className="skills-page">
            <Section>
                <Section.Header
                    title="Skills & Technologies"
                    subtitle="A comprehensive overview of my technical skills and the technologies I work with."
                />

                <div className="skills__grid">
                    {skillCategories.map((category, index) => (
                        <SkillCategory
                            key={category.key}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                <div className="skills__tech-stack">
                    <h3>
                        Technologies I Use Daily
                        <span />
                    </h3>
                    <div className="skills__tech-grid">
                        {topTech.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="skills__tech-item"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <tech.icon />
                                {tech.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Skills;
