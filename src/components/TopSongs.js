import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TopSongs.css';

const TopSongs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const songs = [
    { title: 'Ludzie Psy', artist: 'Maria Peszek', album: 'Jezus Maria Peszek', url: 'https://www.youtube.com/watch?v=sfYue0xuJcI' },
    { title: 'Buraki', artist: 'Kabanos', album: 'Kiełbie we łbie', url: 'https://www.youtube.com/watch?v=skPjiSzR9n4' },
    { title: 'To, co między nami', artist: 'WaluśKraksaKryzys', album: 'Atak', url: 'https://www.youtube.com/watch?v=eoqivdLlYBA' },
    { title: 'Szczenię', artist: 'Król', album: 'Nielot', url: 'https://www.youtube.com/watch?v=oJTZNE8RQDg' },
    { title: 'Autystyczny', artist: 'Luxtorpeda', album: 'Luxtorpeda', url: 'https://www.youtube.com/watch?v=-hqbkY1-iLQ' },
    { title: 'Open Your Eyes', artist: 'Guano Apes', album: 'Crossing All Over! Volume 6', url: 'https://www.youtube.com/watch?v=UNo2-viKfW8' },
    { title: 'Spring 2', artist: 'Max Richter', album: 'Light Academia Classical', url: 'https://www.youtube.com/watch?v=JSFLsw6WHWw' },
    { title: 'Royals', artist: 'Lorde', album: 'Pure Heroine', url: 'https://www.youtube.com/watch?v=nlcIKh6sBtc' },
    { title: 'Wataha', artist: 'Męskie Granie Orkiestra', album: 'singiel promujący trasę Męskie Granie 2016', url: 'https://www.youtube.com/watch?v=7WAFLz9xT3U' },
    { title: 'My Ugly Boy', artist: 'Skunk Anansie', album: '25Live@25', url: 'https://www.youtube.com/watch?v=cd4-VZDUzug' },
    { title: 'Jungle', artist: 'TASH SULTANA', album: 'Notion EP (wersja LIVE BEDROOM RECORDING)', url: 'https://www.youtube.com/watch?v=Vn8phH0k5HI' }
  ];

  return (
    <section id="top-songs" className="content-section" ref={ref}>
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
            TOP 11 SONGS
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
        
        <motion.div 
          className="songs-table-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <table className="songs-table">
            <thead>
              <motion.tr
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <th>Utwór</th>
                <th>Wykonawca</th>
                <th>Album</th>
              </motion.tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    backgroundColor: 'rgba(139, 92, 246, 0.05)',
                    scale: 1.01
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <td>
                    <motion.a 
                      href={song.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ 
                        color: '#a855f7',
                        textDecoration: 'underline'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {song.title}
                    </motion.a>
                  </td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TopSongs;
