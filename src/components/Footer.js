import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';
import { translations } from '../translations';

const Footer = ({ currentLanguage }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/batsnuff/', color: '#E4405F' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/batsnuff/', color: '#1DA1F2' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/mi%C5%82osz-szczepaniak-1708b9178/', color: '#0077B5' },
    { name: 'Last.fm', icon: '🎵', url: 'https://last.fm/pl/user/batsnuff/', color: '#D51007' },
    { name: 'Bizverse', icon: '🌐', url: 'https://my.bizverse.world/BATSNUFF/', color: '#6366F1' },
    { name: 'Discord', icon: '🎮', url: 'https://discord.com/channels/@batsnuff#3486', color: '#5865F2' },
    { name: 'Telegram', icon: '📱', url: 'https://t.me/batsnuff/', color: '#0088CC' }
  ];

  return (
    <footer className="main-footer" id="contacts" ref={ref}>
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: `0 15px 30px ${link.color}40`
              }}
              transition={{ duration: 0.3 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <p>{translations[currentLanguage].footerText}</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
