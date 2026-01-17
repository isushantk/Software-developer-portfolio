// Skills data organized by category
export const skills = {
    languages: [
        { name: 'C++', proficiency: 90 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'Python', proficiency: 85 },
        { name: 'SQL', proficiency: 85 },
        { name: 'C', proficiency: 80 },
        { name: 'Java', proficiency: 75 },
    ],
    frontend: [
        { name: 'React.js', proficiency: 90 },
        { name: 'HTML5', proficiency: 95 },
        { name: 'CSS3', proficiency: 90 },
        { name: 'Bootstrap', proficiency: 85 },
        { name: 'Responsive Design', proficiency: 90 },
    ],
    backend: [
        { name: 'Node.js', proficiency: 88 },
        { name: 'Express.js', proficiency: 85 },
        { name: 'REST APIs', proficiency: 90 },
        { name: 'MVC Architecture', proficiency: 85 },
    ],
    databases: [
        { name: 'MongoDB', proficiency: 85 },
        { name: 'MySQL', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 75 },
    ],
    tools: [
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 70 },
        { name: 'AWS', proficiency: 70 },
        { name: 'Vercel', proficiency: 85 },
        { name: 'Jupyter Notebook', proficiency: 80 },
        { name: 'Tableau', proficiency: 70 },
        { name: 'Power BI', proficiency: 70 },
        { name: 'Linux', proficiency: 75 },
    ],
};

export const skillCategories = [
    { key: 'languages', title: 'Languages', icon: 'FiCode' },
    { key: 'frontend', title: 'Frontend', icon: 'FiLayout' },
    { key: 'backend', title: 'Backend', icon: 'FiServer' },
    { key: 'databases', title: 'Databases', icon: 'FiDatabase' },
    { key: 'tools', title: 'Tools & Platforms', icon: 'FiTool' },
];
