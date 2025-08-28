import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import { translations } from '../translations';

const About = ({ currentLanguage }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="content-section" ref={ref}>
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {translations[currentLanguage].aboutTitle}
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div 
              className="quote-card"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <blockquote>
                <motion.span 
                  className="quote-icon"
                  animate={{ 
                    rotate: [0, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  "
                </motion.span>
                Jestem <span className="highlight">Miłosz</span>, ale w Web2 jak i Web3 możecie mnie znać jako <span className="highlight">BATSNUFF</span>:
                <br /><br />
                {translations[currentLanguage].aboutDescription}
                <motion.span 
                  className="quote-icon"
                  animate={{ 
                    rotate: [0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  "
                </motion.span>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
