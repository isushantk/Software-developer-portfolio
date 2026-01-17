import { motion } from 'framer-motion';
import './Section.css';

const Section = ({
    children,
    variant = 'default',
    className = '',
    id,
    ...props
}) => {
    const classes = `section ${variant !== 'default' ? `section--${variant}` : ''} ${className}`.trim();

    return (
        <section className={classes} id={id} {...props}>
            <div className="section__container">{children}</div>
        </section>
    );
};

const SectionHeader = ({
    number,
    title,
    subtitle,
    showLine = true,
}) => (
    <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="section__title">
            {number && <span className="section__title-number">{number}.</span>}
            <h2 className="section__title-text">{title}</h2>
            {showLine && <span className="section__title-line" />}
        </div>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </motion.div>
);

Section.Header = SectionHeader;

export default Section;
