import React from 'react';
import './ReviewsIndicator.css';

export default function ReviewsIndicator({ reviews }) {
  return (
    <div
      className="reviews-indicator"
      style={{
        '--positive-reviews': reviews.positive,
        '--negative-reviews': reviews.negative,
      }}
    >
      <div className="indicators-container">
        <div className="numeric-reviews">
          <span>
            {reviews.positive}{' '}
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4" clipPath="url(#clip0_1049_2972)">
                <path
                  d="M5.89333 1.61586L8.89416 4.61669C9.09458 4.81711 9.20833 5.09336 9.20833 5.38044V10.7917C9.20833 11.3875 8.72083 11.875 8.12499 11.875H3.24999C2.81666 11.875 2.42666 11.615 2.25333 11.2196L0.487494 7.09752C0.0324945 6.02502 0.817911 4.83336 1.98249 4.83336H5.04291L4.52833 2.35252C4.47416 2.08169 4.55541 1.80544 4.75041 1.61044C5.06999 1.29627 5.57916 1.29627 5.89333 1.61586ZM11.375 11.875C10.7792 11.875 10.2917 11.3875 10.2917 10.7917V6.45836C10.2917 5.86252 10.7792 5.37502 11.375 5.37502C11.9708 5.37502 12.4583 5.86252 12.4583 6.45836V10.7917C12.4583 11.3875 11.9708 11.875 11.375 11.875Z"
                  fill="#66C0F4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1049_2972">
                  <rect
                    width="13"
                    height="13"
                    fill="white"
                    transform="matrix(-1 0 0 1 13 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            {reviews.negative}{' '}
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M5.89333 12.3841L8.89416 9.38331C9.09458 9.18289 9.20833 8.90664 9.20833 8.61956L9.20833 3.20831C9.20833 2.61248 8.72083 2.12497 8.125 2.12497L3.25 2.12497C2.81666 2.12497 2.42666 2.38497 2.25333 2.78039L0.487495 6.90247C0.032495 7.97497 0.817911 9.16664 1.98249 9.16664L5.04291 9.16664L4.52833 11.6475C4.47416 11.9183 4.55541 12.1946 4.75041 12.3896C5.06999 12.7037 5.57916 12.7037 5.89333 12.3841ZM11.375 2.12498C10.7792 2.12498 10.2917 2.61248 10.2917 3.20831L10.2917 7.54164C10.2917 8.13748 10.7792 8.62498 11.375 8.62498C11.9708 8.62498 12.4583 8.13748 12.4583 7.54164L12.4583 3.20831C12.4583 2.61248 11.9708 2.12498 11.375 2.12498Z"
                  fill="#CD5444"
                />
              </g>
            </svg>
          </span>
        </div>
        <div className="visual-indicator">
          <div className="positive-indicator"></div>
          <div className="negative-indicator"></div>
        </div>
      </div>
      <div className="reviews-amount">{reviews.amount} User Reviews</div>
    </div>
  );
}
