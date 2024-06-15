import React from 'react';
import './BrowseCard.css';
import ReviewsIndicator from '../ReviewsIndicator/ReviewsIndicator';
import Button from '../Button/Button';

export default function BrowseCard({ game }) {
  return (
    <div className="browse-card">
      <div className="info-container">
        <img src={game.header_image} alt={game.name} />

        <div className="main-info">
          <span className="game-title">{game.name}</span>

          <div className="game-tags">
            {game.genres.map((tag) => (
              <span key={game.name + tag.id} className="game-tag">
                {tag.description}
              </span>
            ))}
            <span className="game-tag">+</span>
          </div>

          <div className="platform-release">
            <img
              src={`/media/images/icons/windows-logo.png`}
              alt="windows logo"
            />
            <span className="release-date">{game.release_date.date}</span>
          </div>

          <ReviewsIndicator reviews={game.recommendations.total} />
        </div>
      </div>

      <div className="price-container">
        <Button text="" variant="secondary" extra="wishlistHeartEmpty" />

        {game.price_overview.discount_percent !== 0 ? (
          <div className="price-info discounted">
            <span className="end-date">{game.dsctEndDate}</span>
            <span className="disc-amount">
              -{game.price_overview.discount_percent}%
            </span>
            <div className="price-container">
              <span className="price">
                {game.price_overview.initial_formatted}
              </span>
              <span className="disc-price">
                {game.price_overview.final_formatted}
              </span>
            </div>

            <Button variant="primary" text="Add to Cart" />
          </div>
        ) : (
          <div className="price-info">
            <span className="price">{game.price_overview.final_formatted}</span>

            <Button variant="primary" text="Add to Cart" />
          </div>
        )}
      </div>
    </div>
  );
}
