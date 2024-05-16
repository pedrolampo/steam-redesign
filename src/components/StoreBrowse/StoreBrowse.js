import React, { useEffect, useRef, useState } from 'react';
import './StoreBrowse.css';

import { useSearchParams } from 'react-router-dom';

import Accordion from '../Accordion/Accordion';
import BrowseCard from '../BrowseCard/BrowseCard';
import ReactSelect from 'react-select';
import { Carousel } from 'react-bootstrap';

import { browseGames, storeCategories } from '../../utils/gameList';
import { categories } from '../../utils/categories';

export default function StoreBrowse() {
  const [filteredTags, setFilteredTags] = useState([]);
  const formRef = useRef();
  const [params, setParams] = useSearchParams();

  const selectStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: '#212b452b',
      color: 'var(--text-main)',
      border: 'none',
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      color: 'var(--text-main)',
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: 'var(--bg-highlight)',
      color: 'var(--text-main)',
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: 'var(--bg-highlight)',
      color: 'var(--text-main)',
      ':active': {
        backgroundColor: 'var(--bg-hover)',
      },
      ':hover': {
        backgroundColor: 'var(--bg-hover)',
      },
    }),
  };

  useEffect(() => {
    setParams({
      q: 'all items',
    });
  }, []); // eslint-disable-line

  const addTag = (tag) => {
    setFilteredTags((prevTags) => [
      ...prevTags,
      { label: tag.label, id: tag.value },
    ]);
    params.append('f', tag.value);
    setParams(params);
  };
  const deleteTag = (id) => {
    const filters = params.getAll('f');

    setFilteredTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
    console.log(filteredTags);

    params.delete(
      'f',
      filters.filter((tag) => tag === id)
    );
    setParams(params);
  };

  const setQuery = (query) => {
    setParams({ q: query });
  };

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
                  {/* <input
                    className="navbar-input"
                    type="text"
                    placeholder="Search..."
                  /> */}
                  <ReactSelect
                    className="navbar-input"
                    styles={selectStyles}
                    value=""
                    options={categories.map((tag) => {
                      return { label: tag.label, value: tag.id };
                    })}
                    placeholder="Search..."
                    onChange={(tag) => {
                      addTag(tag);
                    }}
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
                    {tag.label}{' '}
                    <span onClick={() => deleteTag(tag.id)}>&#10005;</span>
                  </span>
                ))}
              </div>

              <span className="divider"></span>

              <Accordion
                title="Top-Level Genres"
                items={categories.filter(
                  (item) => item.category === 'top level'
                )}
              />

              <span className="divider"></span>

              <Accordion
                title="Genres"
                items={categories.filter((item) => item.category === 'genres')}
              />

              <span className="divider"></span>
              <Accordion
                title="Sub-genres"
                items={categories.filter(
                  (item) => item.category === 'sub-genres'
                )}
              />

              <span className="divider"></span>
              <Accordion
                title="Visuals & Viewpoint"
                items={categories.filter((item) => item.category === 'visuals')}
              />

              <span className="divider"></span>
              <Accordion
                title="Themes & Moods"
                items={categories.filter((item) => item.category === 'themes')}
              />

              <span className="divider"></span>
              <Accordion
                title="Features"
                items={categories.filter(
                  (item) => item.category === 'features'
                )}
              />

              <span className="divider"></span>
              <Accordion
                title="Players"
                items={categories.filter((item) => item.category === 'players')}
              />

              <span className="divider"></span>
              <Accordion
                title="Platform"
                items={categories.filter(
                  (item) => item.category === 'platform'
                )}
              />

              <span className="divider"></span>
              <Accordion
                title="Language"
                items={categories.filter(
                  (item) => item.category === 'language'
                )}
              />

              <span className="divider"></span>
              <Accordion
                title="Price"
                items={categories.filter((item) => item.category === 'price')}
              />

              <span className="divider"></span>
              <Accordion
                title="Achievements"
                items={categories.filter(
                  (item) => item.category === 'achievements'
                )}
              />

              <span className="divider"></span>
              <Accordion
                title="Trading Cards"
                items={categories.filter(
                  (item) => item.category === 'trading-cards'
                )}
              />

              <span className="divider"></span>
              <Accordion
                title="Items"
                items={categories.filter((item) => item.category === 'items')}
              />
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
