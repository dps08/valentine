// src/components/Proposal.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Proposal({ onYes, onNo }) {
  const [showModal, setShowModal] = useState(false);

  const handleNoClick = () => {
    setShowModal(true);
  };

  return (
    <motion.div
      className="screen-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative', padding: '2rem' }}
    >
      <div className="final-bg"></div>
      
      {/* Expanded heartfelt message */}
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6' }}>
        Finally, it's time for the most important question of all. I promise to stand by you through every storm,
        to laugh with you on the brightest days, and to hold you close when the world seems cold. I will cherish every
        moment we share, celebrate our victories, and lift you up during the toughest challenges. I will be your safe
        harbor, your greatest supporter, and your best friend. Whether the days are filled with joy or tears, know that
        my heart is yours, now and always.
      </p>

      {/* Final question with "Valentine" in bold */}
      <p style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Will you be my <strong>Valentine</strong>?
      </p>

      <div>
        <button onClick={onYes}>Yes</button>
        <button onClick={handleNoClick}>No</button>
      </div>

      {/* Creative Modal Popup */}
      {showModal && (
        <motion.div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: 'rgba(0, 0, 0, 0.6)' }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: 10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>How about a YES?</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Proposal;
