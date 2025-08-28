import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Web3 from './components/Web3';
import Gaming from './components/Gaming';
import Music from './components/Music';
import TopSongs from './components/TopSongs';
import NFT from './components/NFT';
import Spotify from './components/Spotify';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Symulacja ładowania - zwiększony czas żeby zobaczyć pełną animację
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Nasłuchiwanie scroll
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg">
        <motion.div
          className="floating-particles"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="gradient-overlay" />
      </div>

      <Header scrollY={scrollY} />

      <Navigation />

      <main className="main-content">
        <About />
        <Web3 />
        <Gaming />
        <Music />
        <TopSongs />
        <NFT />
        <Spotify />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
