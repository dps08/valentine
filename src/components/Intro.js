// src/components/Intro.js
import React from 'react';
import { motion } from 'framer-motion';

function Intro({ onNext }) {
  return (
    <motion.div
      className="screen-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hi Miss!</h1>
      <p>Thank you for giving me your number that day. There's a lot that has changed since that day. I got my smile back, which is brigther and bigger this time. Who knew that moment would change our lives so much. This is a small effort from me to put up a smile on your face. Hopefully, I was able to do that. My baby, I want to be your man. I want to be the person who would spend his next living years next to you. </p>
      <button onClick={onNext}>Take me in</button>
    </motion.div>
  );
}

export default Intro;
