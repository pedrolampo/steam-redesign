import React from 'react';
import './GameButton.css';

export default function GameButton({ variant, text }) {
  return (
    <div className={`game-button ${variant}`}>
      <img
        className="icon"
        src={`media/images/${variant}-button.png`}
        alt={`${variant} icon`}
      />
      {text}
    </div>
  );
}
