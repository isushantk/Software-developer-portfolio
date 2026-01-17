import { motion } from 'framer-motion';
import './Card.css';

const Card = ({
    children,
    variant = 'default',
    className = '',
    hover = true,
    ...props
}) => {
    const classes = `card ${variant !== 'default' ? `card--${variant}` : ''} ${!hover ? 'card--no-hover' : ''} ${className}`.trim();

    return (
        <motion.div
            className={classes}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

const CardHeader = ({ children, className = '' }) => (
    <div className={`card__header ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
    <h3 className={`card__title ${className}`}>{children}</h3>
);

const CardSubtitle = ({ children, className = '' }) => (
    <p className={`card__subtitle ${className}`}>{children}</p>
);

const CardContent = ({ children, className = '' }) => (
    <div className={`card__content ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = '' }) => (
    <div className={`card__footer ${className}`}>{children}</div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
