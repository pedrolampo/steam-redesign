import React from 'react';

import { Carousel } from 'react-bootstrap';
import Button from '../Button/Button';

import { storeCategories } from '../../utils/gameList';

import './StoreBrowse.css';

export default function StoreBrowse() {
  console.log(storeCategories);
  return (
    <div className="store-browse">
      <div className="main-content">
        <div className="store-section">
          <h3>Top Categories</h3>
          <div className="container categories">
            <Carousel interval={null} className="store-carousel">
              <Carousel.Item>
                <div className="categories-item">
                  {storeCategories.map((category) => (
                    <div key={category.id} className="category-carousel-card">
                      <img
                        src={`/media/images/categories/${category.name.toLowerCase()}.png`}
                        alt={category.name}
                      />
                      <span className="category-title">{category.name}</span>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
