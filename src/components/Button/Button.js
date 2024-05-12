import React from 'react';

import { wishlistHeart, wishlistHeartEmpty } from '../../utils/svg.js';

import './Button.css';

export default function Button({ variant, text, extra }) {
  const hasExtra = () => {
    if (!extra) return;
    else if (extra === 'wishlistHeart') {
      return wishlistHeart;
    } else if (extra === 'wishlistHeartEmpty') {
      return wishlistHeartEmpty;
    } else return;
  };

  return (
    <div className={`button ${variant}`}>
      <button>
        {text} {hasExtra()}
      </button>
    </div>
  );
}
