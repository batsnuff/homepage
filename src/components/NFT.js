import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './NFT.css';

const NFT = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="nft" className="content-section" ref={ref}>
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
            <motion.a 
              href="https://batsnuff.github.io/NFT-Showcase/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="gradient-text">a bit of</span> NFT SHOWCASE
            </motion.a>
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
        
        <motion.div 
          className="nft-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div 
            className="nft-video-container"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <video 
              className="nft-video" 
              src="images/animation nft.mp4" 
              autoPlay 
              playsInline 
              loop 
              muted 
              loading="lazy"
            />
            <motion.div 
              className="video-overlay"
              animate={{
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NFT;
