import React from 'react';
import './BrowseCard.css';
import ReviewsIndicator from '../ReviewsIndicator/ReviewsIndicator';
import Button from '../Button/Button';

export default function BrowseCard({ game }) {
  return (
    <div className="browse-card">
      <div className="info-container">
        <img
          src={`/media/images/games/${game.folderName}/cover.png`}
          alt={`${game.name}`}
        />

        <div className="main-info">
          <span className="game-title">{game.name}</span>

          <div className="game-tags">
            {game.tags.map((tag) => (
              <span key={tag} className="game-tag">
                {tag}
              </span>
            ))}
            <span className="game-tag">+</span>
          </div>

          <div className="platform-release">
            <img src={`/media/images/windows-logo.png`} alt="windows logo" />
            <span className="release-date">{game.releaseDate}</span>
          </div>

          <ReviewsIndicator reviews={game.reviews} />
        </div>
      </div>

      <div className="price-container">
        <Button text="" variant="secondary" extra="wishlistHeartEmpty" />

        {game.isDiscounted ? (
          <div className="price-info discounted">
            <span className="end-date">{game.dsctEndDate}</span>
            <span className="disc-amount">-{game.dsctAmount}%</span>
            <div className="price-container">
              <span className="price">${game.price}</span>
              <span className="disc-price">${game.dsctPrice}</span>
            </div>

            <Button variant="primary" text="Add to Cart" />
          </div>
        ) : (
          <div className="price-info">
            <span className="price">${game.price}</span>

            <Button variant="primary" text="Add to Cart" />
          </div>
        )}
      </div>
    </div>
  );
}
