import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Spotify.css';
import { translations } from '../translations';

const Spotify = ({ currentLanguage }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="spotify-section" ref={ref}>
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
            🎵 {translations[currentLanguage].spotifyTitle}
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
        
        <motion.div 
          className="spotify-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <iframe 
            src="https://open.spotify.com/embed/playlist/4F53qvpguiVUWGPeJoCkzb?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Spotify;
