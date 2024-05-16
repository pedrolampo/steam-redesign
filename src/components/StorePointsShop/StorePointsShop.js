import React, { useEffect } from 'react';
import './StorePointsShop.css';

import Button from '../Button/Button';
import { Link, useSearchParams } from 'react-router-dom';
import { pointsShopSections } from '../../utils/points-shop-sections';

export default function StorePointsShop() {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    setParams({
      'points-section-id': pointsShopSections[0].sectionItems[0].id,
    });
  }, []); // eslint-disable-line

  const handleClick = (id) => {
    setParams({ 'points-section-id': id });
  };

  return (
    <div className="store-points-shop">
      <div className="main-content">
        <div className="store-section points-shop-header">
          <div>
            <h3>Buy Games, Earn Points</h3>
            <p>Customize your Steam experience with Points Shop items.</p>
          </div>

          <div className="buttons-container">
            <Button variant="tertiary" text="How it works" />
            <Button variant="tertiary" text="History" />
            <Link to="/profile">
              <Button variant="tertiary" text="My Profile" />
            </Link>
            <div className="points-indicator">
              <img
                alt="points icon"
                src="/media/images/icons/points-icon.png"
              />
              2,500
            </div>
          </div>
        </div>

        <div className="store-section points-container">
          <div className="side-bar">
            {pointsShopSections.map((section) => (
              <div key={section.id} className="side-bar-section">
                <h5>{section.title}</h5>

                <div>
                  {section.sectionItems.map((item) => (
                    <div
                      key={item.id}
                      className={`side-bar-item ${
                        params.get('points-section-id') === item.id.toString()
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => handleClick(item.id)}
                    >
                      <span>{item.name}</span>
                      <span className="amount">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="points-items-container">
            <div className="points-items-section">
              <h5>Steam Scream 2023 Items</h5>

              <div>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="points-card">
                    <img
                      alt="point shop item"
                      src="/media/images/points-shop/points-item.png"
                    />

                    <h6>Greenhouse of Horror</h6>

                    <span className="point-item-category">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
                          fill="#76808C"
                        />
                      </svg>
                      Game Profile
                    </span>

                    <span className="point-shop-price">
                      <img
                        alt="points icon"
                        src="/media/images/icons/points-icon.png"
                      />{' '}
                      5,000
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
