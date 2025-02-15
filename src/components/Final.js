// src/components/Final.js
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Continuous, improved fireworks across the screen
function Fireworks() {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a burst from a random position in the upper half of the screen.
      const burstCenter = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.5),
      };
      const burstCount = 50; // more particles for bigger fireworks
      const newBurst = [];
      for (let i = 0; i < burstCount; i++) {
        newBurst.push({
          id: Date.now() + '-' + i,
          angle: Math.random() * 360,
          distance: Math.random() * 300 + 100, // larger spread
          color: `hsl(${Math.random() * 360}, 100%, 60%)`,
          startX: burstCenter.x,
          startY: burstCenter.y,
        });
      }
      setBursts(prev => [...prev, ...newBurst]);
      // Remove these particles after 1.5 seconds
      setTimeout(() => {
        setBursts(prev => prev.filter(p => Date.now() - parseInt(p.id.split('-')[0]) < 1500));
      }, 1500);
    }, 500); // New burst every 500ms
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {bursts.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, x: p.startX, y: p.startY, scale: 1 }}
          animate={{
            x: p.startX + Math.cos(p.angle * Math.PI / 180) * p.distance,
            y: p.startY + Math.sin(p.angle * Math.PI / 180) * p.distance,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: 'fixed',
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: p.color,
          }}
        />
      ))}
    </AnimatePresence>
  );
}

// Continuous hearts flowing across the entire screen from left to right
function HeartFlow() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setHearts(prev => [...prev, { id, y: Math.random() * window.innerHeight }]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id));
      }, 5000); // Hearts travel for 5 seconds across the screen
    }, 300); // Every 300ms
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {hearts.map(h => (
        <motion.div
          key={h.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: window.innerWidth + 50 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5, ease: "linear" }}
          style={{
            position: 'fixed',
            top: h.y,
            fontSize: '1.5rem',
            pointerEvents: 'none',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

// Balloons that float upward from random positions at the bottom of the screen
function Balloons() {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setBalloons(prev => [...prev, { id, x: Math.random() * window.innerWidth }]);
      setTimeout(() => {
        setBalloons(prev => prev.filter(b => b.id !== id));
      }, 10000);
    }, 500); // New balloon every 500ms
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {balloons.map(b => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, y: window.innerHeight }}
          animate={{ opacity: 1, y: -150 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 10, ease: "linear" }}
          style={{
            position: 'fixed',
            left: b.x,
            fontSize: '2.5rem',
            pointerEvents: 'none',
          }}
        >
          {/* You can replace the emoji with a heart-shaped balloon image if desired */}
          ❤️
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

function Final() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #ffc0cb, #ffffff)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Celebration effects */}
      <Fireworks />
      <HeartFlow />
      <Balloons />

      {/* Centered content */}
      <motion.div
        className="screen-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        {/* Big rose in the center (using emoji) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontSize: '4rem', marginBottom: '20px' }}
        >
          🌹
        </motion.div>
        <h1 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>Yayyy!</h1>
        <p style={{ fontSize: '1.5rem' }}>
          This will be the best decision of your life, I will make sure of it!
          Now open the door baby, your man is standing right outside for you.
        </p>
      </motion.div>
    </div>
  );
}

export default Final;
