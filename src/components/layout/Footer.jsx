import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:hello@example.com', label: 'Email' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            className="footer__social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </div>

                <div className="footer__divider" />

                <div className="footer__content">
                    <p className="footer__text">
                        Designed & Built by <span>Sushant Kumar</span>
                    </p>
                    <p className="footer__credit">
                        &copy; {currentYear} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
