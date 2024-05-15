import React, { useEffect, useRef, useState } from 'react';
import './StoreBrowse.css';

import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Carousel } from 'react-bootstrap';
import Accordion from '../Accordion/Accordion';
import BrowseCard from '../BrowseCard/BrowseCard';

import { browseGames, storeCategories } from '../../utils/gameList';

export default function StoreBrowse() {
  const [filteredTags, setFilteredTags] = useState([
    {
      id: uuidv4(),
      name: 'Adventure',
    },
    {
      id: uuidv4(),
      name: 'Casual',
    },
    {
      id: uuidv4(),
      name: 'RPG',
    },
    {
      id: uuidv4(),
      name: 'First-Person Shooter',
    },
  ]);
  const formRef = useRef();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    setParams({
      q: 'all-items',
    });
  }, []); // eslint-disable-line

  const addTag = (name) => {
    const id = uuidv4();
    setFilteredTags((prevTags) => [...prevTags, { name: name, id: id }]);
    params.append('f', id);
    setParams(params);
  };

  const deleteTag = (id) => {
    const filters = params.getAll('f');

    setFilteredTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });

    params.delete(
      'f',
      filters.filter((tag) => tag === id)
    );
    setParams(params);
  };

  const setQuery = (query) => {
    setParams({ q: query });
  };

  // const setFilters = (filter) => {
  //   params.set('f', filter)
  //   setParams()
  // }

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
              <span
                onClick={() => setQuery('all items')}
                className={`top-filter-option ${
                  params.get('q') === 'all items' ? 'active' : ''
                }`}
              >
                All Items
              </span>
              <span
                onClick={() => setQuery('new and -trending')}
                className={`top-filter-option ${
                  params.get('q') === 'new and trending' ? 'active' : ''
                }`}
              >
                New and Trending
              </span>
              <span
                onClick={() => setQuery('top sellers')}
                className={`top-filter-option ${
                  params.get('q') === 'top sellers' ? 'active' : ''
                }`}
              >
                Top Sellers
              </span>
              <span
                onClick={() => setQuery('top rated')}
                className={`top-filter-option ${
                  params.get('q') === 'top rated' ? 'active' : ''
                }`}
              >
                Top Rated
              </span>
              <span
                onClick={() => setQuery('discounted')}
                className={`top-filter-option ${
                  params.get('q') === 'discounted' ? 'active' : ''
                }`}
              >
                Discounted
              </span>
              <span
                onClick={() => setQuery('popular')}
                className={`top-filter-option ${
                  params.get('q') === 'popular' ? 'active' : ''
                }`}
              >
                Popular
              </span>
              <span
                onClick={() => setQuery('coming soon')}
                className={`top-filter-option ${
                  params.get('q') === 'coming soon' ? 'active' : ''
                }`}
              >
                Coming Soon
              </span>
              <span
                onClick={() => setQuery('on wishlist')}
                className={`top-filter-option ${
                  params.get('q') === 'on wishlist' ? 'active' : ''
                }`}
              >
                On Wishlist
              </span>
              <span
                onClick={() => setQuery('upcoming events')}
                className={`top-filter-option ${
                  params.get('q') === 'upcoming events' ? 'active' : ''
                }`}
              >
                Upcoming Events
              </span>
            </div>
          </div>

          <div className="main-browse-content">
            <div className="side-filters">
              <div className="side-filter-title">
                <span>FILTERS</span>
                <img
                  src="/media/images/icons/clear-filters-icon.png"
                  alt="clear filters icon"
                />
              </div>

              <div className="search-container">
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    addTag(e.target[0].value);
                    e.target[0].value = '';
                  }}
                >
                  <input
                    className="navbar-input"
                    type="text"
                    placeholder="Search..."
                  />
                  <svg
                    className="navbar-search-icon"
                    onClick={() => formRef.current.requestSubmit()}
                    // width="20"
                    // height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1003_1024)">
                      <path
                        d="M12.9167 11.6667H12.2584L12.025 11.4417C13.025 10.275 13.5417 8.68337 13.2584 6.9917C12.8667 4.67503 10.9334 2.82503 8.60003 2.5417C5.07503 2.10837 2.10837 5.07503 2.5417 8.60003C2.82503 10.9334 4.67503 12.8667 6.9917 13.2584C8.68337 13.5417 10.275 13.025 11.4417 12.025L11.6667 12.2584V12.9167L15.2084 16.4584C15.55 16.8 16.1084 16.8 16.45 16.4584C16.7917 16.1167 16.7917 15.5584 16.45 15.2167L12.9167 11.6667ZM7.9167 11.6667C5.8417 11.6667 4.1667 9.9917 4.1667 7.9167C4.1667 5.8417 5.8417 4.1667 7.9167 4.1667C9.9917 4.1667 11.6667 5.8417 11.6667 7.9167C11.6667 9.9917 9.9917 11.6667 7.9167 11.6667Z"
                        fill="#4B619B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1003_1024">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </form>
              </div>

              <div className="filter-tags-container">
                {filteredTags.map((tag) => (
                  <span key={tag.id} className="filter-tag">
                    {tag.name}{' '}
                    <span onClick={() => deleteTag(tag.id)}>&#10005;</span>
                  </span>
                ))}
              </div>

              <span className="divider"></span>

              <Accordion
                title="Top-Level Genres"
                items={[
                  { id: uuidv4(), name: 'Adventure', qty: '5,000' },
                  { id: uuidv4(), name: 'Casual', qty: '5,000' },
                  { id: uuidv4(), name: 'RPG', qty: '5,000' },
                  { id: uuidv4(), name: 'Strategy', qty: '5,000' },
                  { id: uuidv4(), name: 'Simulation', qty: '5,000' },
                  { id: uuidv4(), name: 'Free-to-Play', qty: '5,000' },
                  { id: uuidv4(), name: 'Shooter', qty: '5,000' },
                  { id: uuidv4(), name: 'Action', qty: '5,000' },
                ]}
              />

              <span className="divider"></span>

              <Accordion
                title="Genres"
                items={[
                  { id: uuidv4(), name: 'JRPG', qty: '5,000' },
                  { id: uuidv4(), name: 'Sandbox', qty: '5,000' },
                  { id: uuidv4(), name: 'Rogue-Like', qty: '5,000' },
                  { id: uuidv4(), name: 'Platformer', qty: '5,000' },
                  { id: uuidv4(), name: 'Arcade & Rhythm', qty: '5,000' },
                  {
                    id: uuidv4(),
                    name: 'Fighting & Martial Arts',
                    qty: '5,000',
                  },
                  { id: uuidv4(), name: 'First-Person Shooter', qty: '5,000' },
                  { id: uuidv4(), name: 'Hack & Slash', qty: '5,000' },
                  { id: uuidv4(), name: 'Platformer & Runner', qty: '5,000' },
                  { id: uuidv4(), name: 'Third-Person Shooter', qty: '5,000' },
                  { id: uuidv4(), name: 'schnmup', qty: '5,000' },
                  { id: uuidv4(), name: 'Action RPG', qty: '5,000' },
                  { id: uuidv4(), name: 'Adventure RPG', qty: '5,000' },
                  { id: uuidv4(), name: 'Party-Based', qty: '5,000' },
                  { id: uuidv4(), name: 'Strategy RPG', qty: '5,000' },
                  { id: uuidv4(), name: 'Turn-Based', qty: '5,000' },
                  { id: uuidv4(), name: 'Card & Board', qty: '5,000' },
                ]}
              />

              <span className="divider"></span>
              <Accordion title="Sub-genres" />

              <span className="divider"></span>
              <Accordion title="Visuals & Viewpoint" />

              <span className="divider"></span>
              <Accordion title="Themes & Moods" />

              <span className="divider"></span>
              <Accordion title="Features" />

              <span className="divider"></span>
              <Accordion title="Players" />

              <span className="divider"></span>
              <Accordion title="Platform" />

              <span className="divider"></span>
              <Accordion title="Language" />

              <span className="divider"></span>
              <Accordion title="Price" />

              <span className="divider"></span>
              <Accordion title="Achievements" />

              <span className="divider"></span>
              <Accordion title="Trading Cards" />

              <span className="divider"></span>
              <Accordion title="Items" />
            </div>

            <div className="game-list">
              {browseGames.map((game) => (
                <BrowseCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}