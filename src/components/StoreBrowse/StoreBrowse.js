import React from 'react';
import './StoreBrowse.css';

import { Carousel } from 'react-bootstrap';

import { storeCategories } from '../../utils/gameList';

export default function StoreBrowse() {
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

        <div className="store-section browse-content">
          <h4>Browse Steam</h4>

          <div className="filter-top-bar">
            <div className="filter-view">
              <span>View</span>
              <img
                src="/media/images/icons/list-view-icon.png"
                alt="list view icon"
              />
              <img
                src="/media/images/icons/box-view-icon.png"
                alt="box view icon"
              />
            </div>

            <div className="top-filter-options">
              <span className="top-filter-option active">All Items</span>
              <span className="top-filter-option">New and Trending</span>
              <span className="top-filter-option">Top Sellers</span>
              <span className="top-filter-option">Top Rated</span>
              <span className="top-filter-option">Discounted</span>
              <span className="top-filter-option">Popular</span>
              <span className="top-filter-option">Coming Soon</span>
              <span className="top-filter-option">On Wishlist</span>
              <span className="top-filter-option">Upcoming Events</span>
            </div>
          </div>

          <div className="main-browse-content">
            <div className="side-filters"></div>
            <div className="game-list"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
