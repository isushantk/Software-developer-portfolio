// Projects data
export const projects = [
    {
        id: 1,
        title: 'Zippy Basket - Grocery Delivery Web-App',
        description: 'A full-stack grocery delivery web application enabling seamless product browsing, cart management, and order workflows with a scalable backend architecture.',
        longDescription: 'Designed and developed Zippy Basket using the MERN stack. Implemented RESTful APIs, structured MVC design, and responsive UI, ensuring efficient data flow, fast performance, and consistent user experience across devices.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
        category: 'fullstack',
        featured: true,
        github: 'https://github.com/isushantk',
        demo: '#',
        image: null,
    },
    {
        id: 2,
        title: 'SmartCredit Analytics - Segmentation & Scoring',
        description: 'A credit scoring and customer segmentation model using Python to evaluate creditworthiness by analyzing financial and behavioral variables.',
        longDescription: 'Built a credit scoring model supporting data-driven lending and risk-management decisions. Performed data preprocessing, feature engineering, and segmentation analysis, generating actionable insights for risk-based customer categorization.',
        technologies: ['Python', 'Pandas', 'Matplotlib', 'Machine Learning', 'Data Analysis'],
        category: 'data',
        featured: true,
        github: 'https://github.com/isushantk',
        demo: null,
        image: null,
    },
    {
        id: 3,
        title: 'Arius - Service Based Platform',
        description: 'A responsive service-based platform with modular UI components, ensuring cross-device compatibility and fast load performance.',
        longDescription: 'Developed a responsive service-based platform with clean, structured, and optimized frontend code. Focused on modular UI components and cross-device compatibility.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        category: 'frontend',
        featured: true,
        github: 'https://github.com/isushantk',
        demo: '#',
        image: null,
    },
];

export const projectCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'data', label: 'Data Science' },
];
