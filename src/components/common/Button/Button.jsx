import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    href,
    disabled = false,
    onClick,
    className = '',
    ...props
}) => {
    const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

    const content = (
        <>
            {Icon && iconPosition === 'left' && <Icon />}
            {children}
            {Icon && iconPosition === 'right' && <Icon />}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
