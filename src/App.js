// src/App.js
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Login from './components/Login';
import Intro from './components/Intro';
import Journey from './components/Journey';
import Proposal from './components/Proposal';
import Final from './components/Final';

function App() {
  // Stages: login, intro, journey, proposal, final
  const [stage, setStage] = useState('login');

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        {stage === 'login' && (
          <Login key="login" onSuccess={() => setStage('intro')} />
        )}
        {stage === 'intro' && (
          <Intro key="intro" onNext={() => setStage('journey')} />
        )}
        {stage === 'journey' && (
          <Journey key="journey" onNext={() => setStage('proposal')} />
        )}
        {stage === 'proposal' && (
          <Proposal
            key="proposal"
            onYes={() => setStage('final')}
            onNo={() => {}}
          />
        )}
        {stage === 'final' && <Final key="final" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
