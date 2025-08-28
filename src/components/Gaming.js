import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gaming.css';

const Gaming = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const launchers = [
    { name: 'Solido', icon: '🚀', url: 'https://solido.games/' },
    { name: 'Elixir', icon: '🔥', url: 'https://launcher.elixir.app/' }
  ];

  const games = [
    { name: 'Koloblok', url: 'https://wax.kolobok.io/' },
    { name: 'NFT Panda', url: 'https://nftpanda.space/' },
    { name: 'Blockchain Cuties', url: 'https://blockchaincuties.com/' },
    { name: 'Lost Relics', url: 'https://lostrelics.io/' },
    { name: 'Big Time', url: 'https://bigtime.gg/' },
    { name: 'Landbox', url: 'https://www.landboxhub.io/' },
    { name: 'FONE Games', url: 'https://www.fone.dev/#games' },
    { name: 'Crypto Dragons/Cats', url: 'https://realis.network/games' },
    { name: 'Alien Worlds', url: 'https://alienworlds.io/' },
    { name: 'Wemix Games', url: 'https://wemixnetwork.com/' },
    { name: 'Coin Birds', url: 'https://coin-birds.com/welcome' },
    { name: 'Mini Royale', url: 'https://miniroyale.io/' }
  ];

  return (
    <section id="gaming" className="content-section" ref={ref}>
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
            Gaming & Play2Earn
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
        
        <div className="gaming-content">
          <motion.div 
            className="gaming-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Od najmłodszych lat jestem zapalonym graczem i zawsze uwielbiałem spędzać czas na grach komputerowych. Przez wiele lat grałem na różnych konsolach PlayStation oraz na komputerze, w szczególności <span className="highlight">w gry typu MMORPG, wyścigowe oraz FPS.</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Jednak nie tylko tego typu gry mnie interesowały - na swoim telefonie lubię grać w <span className="highlight">gry Idle</span> oraz inne gatunki, które przyciągają moją uwagę. To właśnie dzięki graniu zyskałem nie tylko rozrywkę, ale również wiele pozytywnych doświadczeń i umiejętności, takich jak <span className="highlight">strategiczne myślenie, refleks czy koordynacja ruchowa.</span>
            </motion.p>
            
            <motion.div 
              className="launchers"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <h3>Używane Launchery:</h3>
              <div className="launcher-links">
                {launchers.map((launcher, index) => (
                  <motion.a
                    key={launcher.name}
                    href={launcher.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="launcher-btn"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="launcher-icon">{launcher.icon}</span>
                    {launcher.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="games-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <h3>Ulubione Gry Blockchain:</h3>
              <div className="games-list">
                {games.map((game, index) => (
                  <motion.a
                    key={game.name}
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="game-link"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {game.name}
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

export default Gaming;
