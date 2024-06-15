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
          <img src={game.header_image} alt={`${game.name}`} />

          <div className="side-imgs">
            {/* <img
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
            /> */}
            {game.screenshots.slice(0, 3).map((img) => (
              <img
                src={img.path_full}
                key={`${game.name} img ${img.id}`}
                alt={`${game.name}`}
              />
            ))}
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
            {game.genres.map((tag) => (
              <Link
                to={`/store/browse?f=${tag.id}`}
                key={tag.id}
                className="game-tag"
              >
                {tag.description}
              </Link>
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

          <Button text="Find more like this" variant="tertiary" />
        </div>
      </div>

      <div className="price-container">
        <div className="top-buttons">
          <Button variant="tertiary" text="Ignore" />
          <Button variant="secondary" text="Wishlist" />
        </div>

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

            <Button variant="secondary" text="Visit Store Page" />
          </div>
        ) : (
          <div className="price-info">
            <span className="price">{game.price_overview.final_formatted}</span>

            <Button variant="secondary" text="Visit Store Page" />
          </div>
        )}
      </div>
    </div>
  );
}
