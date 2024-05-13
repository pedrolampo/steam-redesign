import React from 'react';
import './GameButton.css';

export default function GameButton({ variant, text, hasIcon = true }) {
  return (
    <div className={`game-button ${variant}`}>
      {hasIcon && (
        <img
          className="icon"
          src={`media/images/${variant}-button.png`}
          alt={`${variant} icon`}
        />
      )}
      {text}
    </div>
  );
}
