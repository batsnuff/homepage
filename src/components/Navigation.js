import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';
import { translations } from '../translations';

const Navigation = ({ currentLanguage }) => {
  const [activeLink, setActiveLink] = useState('');

  const navItems = [
    { id: 'about', label: translations[currentLanguage].about, icon: '👤' },
    { id: 'web3', label: translations[currentLanguage].web3, icon: '🔲' },
    { id: 'gaming', label: translations[currentLanguage].gaming, icon: '🎮' },
    { id: 'music', label: translations[currentLanguage].music, icon: '🎵' },
    { id: 'nft', label: translations[currentLanguage].nft, icon: '🎨' },
    { id: 'spotify', label: translations[currentLanguage].spotify, icon: '🎧' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
    }
  };

  // Sprawdzanie aktywnego linku przy scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <motion.ul 
          className="nav-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <motion.button
                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navigation;
