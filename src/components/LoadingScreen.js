import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';
import { translations } from '../translations';

const LoadingMiloverseText = ({ currentLanguage }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = translations[currentLanguage].loadingMiloverse;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 70); // Jeszcze szybciej dla bardziej dynamicznego efektu

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="loading-miloverse-text"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {displayText.split('').map((letter, index) => (
        <motion.span
          key={index}
          className={letter === ' ' ? 'space' : 'letter'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const LoadingScreen = ({ currentLanguage }) => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="loading-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">WELCOME IN</span>
            <span className="miloverse-text">MILOVERSE</span>
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="loading-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {translations[currentLanguage].subtitle}
        </motion.div>
        
        <motion.div
          className="loading-bar-container"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="loading-bar" />
        </motion.div>
        
        <motion.div
          className="loading-miloverse"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <LoadingMiloverseText currentLanguage={currentLanguage} />
        </motion.div>

        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          Loading...
        </motion.div>
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="loading-particle"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}
    </div>
  );
};

export default LoadingScreen;
