import React from 'react';
import './Button.css';

export default function Button({ variant, text }) {
  return (
    <div className={`button ${variant}`}>
      <button>{text}</button>
    </div>
  );
}
