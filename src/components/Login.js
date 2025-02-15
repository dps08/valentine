// src/components/Login.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Login({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password.trim().toLowerCase() === 'ammu') {
      onSuccess();
    } else {
      setError('Incorrect password. Hint: think of my name.');
    }
  };

  return (
    <motion.div
      className="screen-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Login</h1>
      <p>Enter Password (Hint: think of my name)</p>
      <input
        type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); setError(''); }}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </motion.div>
  );
}

export default Login;
