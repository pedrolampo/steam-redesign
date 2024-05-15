import React from 'react';
import './DiscoverCard.css';

import ReviewsIndicator from '../ReviewsIndicator/ReviewsIndicator';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function DiscoverCard({ game }) {
  return (
    <div className="discover-card">
      <div className="info-container">
        <div className="imgs-container">
          <img
            src={`/media/images/games/${game.folderName}/discover-1.png`}
            alt={`${game.name}`}
          />

          <div className="side-imgs">
            <img
              src={`/media/images/games/${game.folderName}/discover-2.png`}
              alt={`${game.name}`}
            />
            <img
              src={`/media/images/games/${game.folderName}/discover-3.png`}
              alt={`${game.name}`}
            />
            <img
              src={`/media/images/games/${game.folderName}/discover-4.png`}
              alt={`${game.name}`}
            />
          </div>
        </div>

        <div className="main-info">
          <div className="title-info">
            <span className="game-title">{game.name}</span>
            <span className="related-info">
              Since you played <span className="related-game">Fallout 4</span>
            </span>
          </div>

          <div className="game-tags">
            {game.tags.map((tag) => (
              <Link
                to={`/store/browse?f=${tag}`}
                key={tag}
                className="game-tag"
              >
                {tag}
              </Link>
            ))}
            <span className="game-tag">+</span>
          </div>

          <div className="platform-release">
            <img src={`/media/images/windows-logo.png`} alt="windows logo" />
            <span className="release-date">{game.releaseDate}</span>
          </div>

          <ReviewsIndicator reviews={game.reviews} />

          <Button text="Find more like this" variant="tertiary" />
        </div>
      </div>

      <div className="price-container">
        <div className="top-buttons">
          <Button variant="tertiary" text="Ignore" />
          <Button variant="secondary" text="Wishlist" />
        </div>

        {game.isDiscounted ? (
          <div className="price-info discounted">
            <span className="end-date">{game.dsctEndDate}</span>
            <span className="disc-amount">-{game.dsctAmount}%</span>
            <div className="price-container">
              <span className="price">${game.price}</span>
              <span className="disc-price">${game.dsctPrice}</span>
            </div>

            <Button variant="secondary" text="Visit Store Page" />
          </div>
        ) : (
          <div className="price-info">
            <span className="price">${game.price}</span>

            <Button variant="secondary" text="Visit Store Page" />
          </div>
        )}
      </div>
    </div>
  );
}
