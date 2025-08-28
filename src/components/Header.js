import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Header.css';
import LanguageSelector from './LanguageSelector';
import { translations } from '../translations';

const Header = ({ scrollY, currentLanguage, onLanguageChange }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <header className="hero-header" ref={ref}>
      <div className="header-container">
        
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              <span className="gradient-text">WELCOME IN</span>
              <motion.span 
                className="miloverse-text"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                MILOVERSE
              </motion.span>
            </h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {translations[currentLanguage].subtitle}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="hero-avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <div className="avatar-container">
              <motion.img 
                src="https://pbs.twimg.com/profile_images/443374604317229056/UvHpzPuV_400x400.jpeg" 
                alt="BATSNUFF Avatar" 
                className="avatar-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="avatar-glow"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Language Selector */}
        <motion.div
          className="header-language-selector"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <LanguageSelector 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange} 
          />
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="floating-element floating-element-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="floating-element floating-element-2"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </header>
  );
};

export default Header;
