import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Music.css';

const Music = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const artists = [
    { name: 'Maria Peszek', url: 'https://culture.pl/pl/tworca/maria-peszek' },
    { name: 'Max Richter', url: 'https://www.maxrichtermusic.com/' },
    { name: 'Ørganek', url: 'https://organek-sklep.pl/' },
    { name: 'WaluśKraksaKryzys', url: 'https://www.waluskraksakryzys.pl' },
    { name: 'Kukon', url: 'https://rytmy.pl/artysci/kukon/' },
    { name: 'Skunk Anansie', url: 'https://www.skunkanansie.com/' },
    { name: 'Luxtorpeda', url: 'https://www.luxtorpeda.eu/' },
    { name: 'JWP', url: 'https://jwpcrew.pl/plyty/winyl-jwpbc-tloki/' },
    { name: 'Kabanos', url: 'https://kabanos.net/' },
    { name: 'Mela Koteluk', url: 'https://melakoteluk.pl/' }
  ];

  return (
    <section id="music" className="content-section" ref={ref}>
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
            Muzyka & Inspiracje
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
        
        <div className="music-content">
          <motion.div 
            className="music-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Słucham dosłownie wszystkiego, <span className="highlight">od muzyki etnicznej z każdego zakamarka świata, popularnej, rockowej, przez hardcore, nucore po muzykę klasyczną.</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Uwielbiam muzykę lat '70-'90 i polski punk z okresu komunistycznego, muzykę elektroniczną, klubową... no i na dobrą sprawę mógłbym tak wymieniać w nieskończoność.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Skończyłem szkołę muzyczną i z zamiłowania jestem <span className="highlight">tekściarzem oraz kompozytorem</span> (ale wszystko trafia "do szuflady"), też <span className="highlight">śpiewam i rapuję</span>.
            </motion.p>
            
            <motion.div 
              className="artists-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <h3>Obecnie na słuchawkach:</h3>
              <div className="artists-list">
                {artists.map((artist, index) => (
                  <motion.a
                    key={artist.name}
                    href={artist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artist-link"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {artist.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Music;
