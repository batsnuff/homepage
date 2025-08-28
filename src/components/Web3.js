import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Web3.css';

const Web3 = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const techItems = [
    { icon: '🪙', name: 'WAX', color: '#f7931a' },
    { icon: '⚡', name: 'SOL', color: '#14f195' },
    { icon: '🔗', name: 'Matic', color: '#8247e5' }
  ];

  return (
    <section id="web3" className="content-section" ref={ref}>
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
            Web3 & Kryptowaluty
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
        
        <div className="web3-content">
          <motion.div 
            className="web3-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Zajmuję się kryptowalutami od około 2 lat i oszalałem na punkcie Web3, oraz mnóstwa możliwości, jakie oferuje. Chcę być częścią rozwoju tego półświatka co nakłoniło mnie aby w końcu rozpocząć naukę w kierunku <span className="highlight">fullstack developer</span>.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Robiłem wiele rzeczy związanych z programowaniem, głównie kopiuj/wklej z pomocą YouTube lub metodą "prób i błędów". Zaczęło się to już w czasach młodzieńczych (myślę, że w wieku 11/12 lat były pierwsze próby), ale zawsze znajdywałem tysiące wymówek do rozpoczęcia studiów/kursów/nauki "na własną rękę".
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Jakiś czas temu postanowiłem skupić się tylko na <span className="highlight">WAX, SOL i Matic.</span> Głównie inwestuje w waluty i NFT, z których w dużej mierze mogę korzystać w grach, ale również w surowce.
            </motion.p>
            
            <motion.div 
              className="tech-stack"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {techItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="tech-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 15px 30px ${item.color}40`
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="tech-icon">{item.icon}</span>
                  <span className="tech-name">{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Web3;
