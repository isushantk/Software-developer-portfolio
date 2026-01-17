import './Badge.css';

const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    icon: Icon,
    hoverable = false,
    className = '',
}) => {
    const classes = `badge badge--${variant} badge--${size} ${hoverable ? 'badge--hoverable' : ''} ${className}`.trim();

    return (
        <span className={classes}>
            {Icon && <Icon className="badge__icon" />}
            {children}
        </span>
    );
};

export default Badge;
