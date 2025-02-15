// src/components/Journey.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FlowingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      setHearts(prev => [...prev, { id, x, y }]);
      // Remove the heart after 1 second
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id));
      }, 1000);
    }, 300); // Generate a heart every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            left: heart.x,
            top: heart.y,
            fontSize: '24px',
            pointerEvents: 'none',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

function Journey({ onNext }) {
  const [popups, setPopups] = useState([]);

  // Array of photo URLs – update with your actual photo filenames (assumed to be in public/assets)
  const photos = [
    '/assets/photo1.jpg',
    '/assets/photo2.jpg',
    '/assets/photo3.jpg',
    '/assets/photo4.jpg',
    '/assets/photo5.jpg',
    '/assets/photo6.jpg',
    '/assets/photo7.jpg',
    '/assets/photo8.jpg',
    '/assets/photo9.jpg',
    '/assets/photo10.jpg',
    '/assets/photo11.jpg',
    '/assets/photo12.jpg',
    '/assets/photo13.jpg',
    '/assets/photo14.jpg',
    '/assets/photo15.jpg',
    '/assets/photo16.jpg',
    '/assets/photo17.jpg',
    '/assets/photo18.jpg',
    '/assets/photo19.jpg',
    '/assets/photo20.jpg',
    '/assets/photo21.jpg',
    '/assets/photo22.jpg',
    '/assets/photo23.jpg',
    '/assets/photo24.jpg',
    '/assets/photo25.jpg',
    '/assets/photo26.jpg',
    '/assets/photo27.jpg',
    '/assets/photo28.jpg',
    '/assets/photo29.jpg',
    '/assets/photo30.jpg',
    '/assets/photo31.jpg',
    '/assets/photo32.jpg',    
  ];

  // On click, show a random photo at the center for 2 seconds
  const handleClick = () => {
    const id = Date.now();
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPopups(prev => [...prev, { id, photo: randomPhoto }]);
    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== id));
    }, 2000);
  };

  return (
    <div className="journey-wrapper" onClick={handleClick}>
      <FlowingHearts />
      <motion.div
        className="screen-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on the button from triggering photo popups
      >
        <h2>Enjoy the surprises!</h2>
        <p>Click anywhere and watch a little magic appear. A little throwback to us.
            When you're ready, click the button below.</p>
        <button onClick={onNext}>Next</button>
      </motion.div>

      <AnimatePresence>
        {popups.map((p) => (
          <motion.div
            key={p.id}
            className="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
            }}
          >
            <img
              src={p.photo}
              alt="Memory"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Journey;
