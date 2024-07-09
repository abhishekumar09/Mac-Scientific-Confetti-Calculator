// src/components/Confetti.js
import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = ({ trigger }) => {
  return (
    trigger && <ConfettiExplosion />
  );
};

export default Confetti;
