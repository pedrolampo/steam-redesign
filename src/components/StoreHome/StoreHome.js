import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StoreHome.css';

import Button from '../Button/Button';
import GameButton from '../GameButton/GameButton';
import Carousel from 'react-bootstrap/Carousel';

import {
  specialOffers,
  storeCategories,
  freeToPlay,
  recentlyUpdated,
  newAndTrending,
  topSellers,
  under5,
  streamedGames,
} from '../../utils/gameList';
import { categories } from '../../utils/categories';

export default function StoreHome() {
  const specialOffersCarouselQty = ['0', '1', '2', '3'];

  const gamesIds = [1245620, 1145350, 1840080, 1551360, 108600];
  const [featuredGames, setGames] = useState([]);

  const filteredCategories = categories.filter(
    (item) => item.category === 'top level'
  );
  const cateogriesCarouselQty = parseInt(filteredCategories.length / 5);

  useEffect(() => {
    gamesIds.forEach((id) => {
      fetch(`https://steam-api-iota.vercel.app/games/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setGames((prev) => [...prev, data]);
        })
        .catch((err) => console.log(err));
    });
  }, []); //eslint-disable-line

  return (
    <div className="store-home">
      <div className="store-banner">
        <img alt="store banner" src="/media/images/store-banner.png" />
      </div>

      <div className="main-content">
        {/* FEATURED */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>FEATURED</h4>
          </div>
          <div className="container featured">
            <Carousel interval={3000} pause="hover" className="store-carousel">
              {featuredGames.map((game) => (
                <Carousel.Item key={game.steam_appid}>
                  <div className="carousel-item-container">
                    <div className="carousel-img-container">
                      <img
                        className="carousel-main-img"
                        alt={game.name}
                        src={game.header_image}
                      />
                    </div>

                    <div className="carousel-game-about">
                      <span className="carousel-game-name">{game.name}</span>
                      <span className="carousel-game-description">
                        {game.short_description}
                      </span>
                      <div className="carousel-about-imgs">
                        {game.screenshots.slice(0, 4).map((img) => (
                          <img
                            alt={game.name + img.id}
                            key={game.name + img.id}
                            src={img.path_full}
                          />
                        ))}
                      </div>

                      <div className="carousel-tags-container">
                        {game.genres.map((tag) => (
                          <span
                            key={tag.description + tag.id}
                            className="carousel-tag"
                          >
                            {tag.description}
                          </span>
                        ))}
                        <span className="carousel-tag">+</span>
                      </div>

                      <div className="carousel-footer">
                        <Button
                          className="carousel-btn"
                          variant="secondary"
                          text="Wishlist"
                          extra="wishlistHeartEmpty"
                        />
                        <div className="carousel-buy-now">
                          <span className="carousel-price">
                            {game.price_overview.final_formatted}
                          </span>
                          <Button
                            className="carousel-btn"
                            variant="primary"
                            text="Buy Now"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* SPECIAL OFFERS */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>Special Offers</h4>
            <Button variant="tertiary" text="See more" />
          </div>
          <div className="container special-offers">
            <Carousel pause="hover" className="store-carousel">
              {specialOffersCarouselQty.map((qty) => (
                <Carousel.Item key={qty}>
                  <div className="special-offer-item">
                    {specialOffers.map((game) => (
                      <div key={game.id} className="carousel-card">
                        <img
                          src={`media/images/games/${game.folderName}/cover.png`}
                          alt={game.name}
                        />
                        <div className="carousel-card-footer">
                          <span className="game-title">{game.name}</span>
                          <div className="footer-container">
                            <img
                              className="icons/windows-logo"
                              src={`media/images/icons/windows-logo.png`}
                              alt="windows logo"
                            />
                            <div className="dct-container">
                              <span className="end-date">{game.endDate}</span>
                              <span className="disc-amount">
                                -{game.discAmount}%
                              </span>
                              <div className="price-container">
                                <span className="price">${game.price}</span>
                                <span className="disc-price">
                                  ${game.discPrice}
                                </span>
                              </div>
                              <Button
                                variant="secondary"
                                text=""
                                extra="wishlistHeartEmpty"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>Browse Steam</h4>
            <Link to="/store/browse">
              <Button variant="tertiary" text="See more" />
            </Link>
          </div>
          <div className="container categories">
            <Carousel interval={null} className="store-carousel">
              <Carousel.Item>
                <div className="categories-item">
                  {filteredCategories.slice(0, 5).map((category) => (
                    <Link
                      to={`/store/browse?q=all+items&f=${category.id}`}
                      key={category.id}
                      className="category-carousel-card"
                    >
                      <img
                        src={`media/images/categories/action.png`}
                        alt={category.label}
                      />
                      <span className="category-title">{category.label}</span>
                    </Link>
                  ))}
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="categories-item">
                  {filteredCategories.slice(5, 10).map((category) => (
                    <Link
                      to={`/store/browse?q=all+items&f=${category.id}`}
                      key={category.id}
                      className="category-carousel-card"
                    >
                      <img
                        src={`media/images/categories/action.png`}
                        alt={category.label}
                      />
                      <span className="category-title">{category.label}</span>
                    </Link>
                  ))}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* FREE-TO-PLAY */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>Free-to-Play Games</h4>
            <Button interval={2500} variant="tertiary" text="See more" />
          </div>
          <div className="container free-to-play">
            <Carousel pause="hover" className="store-carousel">
              {specialOffersCarouselQty.map((qty) => (
                <Carousel.Item key={qty}>
                  <div className="free-to-play-item">
                    {freeToPlay.map((game) => (
                      <div key={game.id} className="carousel-card">
                        <img
                          src={`media/images/games/${game.folderName}/cover.png`}
                          alt={game.name}
                        />
                        <div className="carousel-card-footer">
                          <span className="game-title">{game.name}</span>
                          <div className="footer-container">
                            <img
                              className="icons/windows-logo"
                              src={`media/images/icons/windows-logo.png`}
                              alt="windows logo"
                            />
                            <div className="play-btn-container">
                              <span className="price">Free</span>
                              <GameButton
                                variant="play"
                                text="Play Now"
                                hasIcon={false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* RECENTLY UPDT */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>Recently Updated</h4>
            <Button variant="tertiary" text="See more" />
          </div>
          <div className="container recently-updated">
            <Carousel interval={3000} pause="hover" className="store-carousel">
              {specialOffersCarouselQty.map((qty) => (
                <Carousel.Item key={qty}>
                  <div className="recently-updated-item">
                    {recentlyUpdated.map((game) => (
                      <div key={game.id} className="carousel-card">
                        <img
                          src={`media/images/updates/${game.folderName}/update.png`}
                          alt={game.name}
                        />
                        <div className="carousel-card-footer">
                          <span className="game-title">{game.name}</span>
                          <div className="footer-container">
                            <span className="update-description">
                              {game.description}
                            </span>
                            <div className="btns-container">
                              <Button variant="tertiary" text="In Wishlist" />
                              <Button variant="secondary" text="View Updates" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* NEW & TRENDING */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>New & Trending</h4>
            <Button variant="tertiary" text="See more" />
          </div>
          <div className="container trending">
            <Carousel pause="hover" className="store-carousel">
              {specialOffersCarouselQty.map((qty) => (
                <Carousel.Item key={qty}>
                  <div className="trending-item">
                    {newAndTrending.map((game) => (
                      <div key={game.id} className="carousel-card">
                        <img
                          src={`media/images/games/${game.folderName}/cover.png`}
                          alt={game.name}
                        />
                        <div className="carousel-card-footer">
                          <span className="game-title">{game.name}</span>
                          <div className="footer-container">
                            <img
                              className="icons/windows-logo"
                              src={`media/images/icons/windows-logo.png`}
                              alt="windows logo"
                            />
                            <div className="play-btn-container">
                              <span className="price">${game.price}</span>
                              <Button
                                variant="secondary"
                                text=""
                                extra="wishlistHeartEmpty"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* TOP SELLERS */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>Top Sellers</h4>
            <Button interval={4000} variant="tertiary" text="See more" />
          </div>
          <div className="container top-sellers">
            <Carousel pause="hover" className="store-carousel">
              {specialOffersCarouselQty.map((qty) => (
                <Carousel.Item key={qty}>
                  <div className="top-sellers-item">
                    {topSellers.map((game) => (
                      <div key={game.id} className="carousel-card">
                        <img
                          src={`media/images/top-sellers/${game.imgName}.png`}
                          alt={`${game.name}`}
                        />
                        <div className="game-info">
                          <span className="game-name">{game.name}</span>
                          <div className="game-info-footer">
                            <img
                              className="icons/windows-logo"
                              src={`media/images/icons/windows-logo.png`}
                              alt="windows logo"
                            />
                            {!game.discPrice ? (
                              <div className="price-container">
                                <span>${game.price}</span>
                                <Button
                                  variant="secondary"
                                  text=""
                                  extra="wishlistHeartEmpty"
                                />
                              </div>
                            ) : (
                              <div className="price-container">
                                <span className="disc-amount">
                                  -{game.discAmount}%
                                </span>
                                <div className="disc-container">
                                  <span className="price">${game.price}</span>
                                  <span className="disc-price">
                                    ${game.discPrice}
                                  </span>
                                </div>
                                <Button
                                  variant="secondary"
                                  text=""
                                  extra="wishlistHeartEmpty"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* UNDER $5 */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>Under $5</h4>
            <Button variant="tertiary" text="See more" />
          </div>
          <div className="container under-5">
            <Carousel interval={3000} pause="hover" className="store-carousel">
              {specialOffersCarouselQty.map((qty) => (
                <Carousel.Item key={qty}>
                  <div className="under-5-item">
                    {under5.map((game) => (
                      <div key={game.id} className="carousel-card">
                        <img
                          src={`media/images/games/${game.folderName}/cover.png`}
                          alt={game.name}
                        />
                        <div className="carousel-card-footer">
                          <span className="game-title">{game.name}</span>
                          <div className="footer-container">
                            <img
                              className="icons/windows-logo"
                              src={`media/images/icons/windows-logo.png`}
                              alt="windows logo"
                            />
                            <div className="dct-container">
                              <span className="end-date">{game.endDate}</span>
                              <span className="disc-amount">
                                -{game.discAmount}%
                              </span>
                              <div className="price-container">
                                <span className="price">${game.price}</span>
                                <span className="disc-price">
                                  ${game.discPrice}
                                </span>
                              </div>
                              <Button
                                variant="secondary"
                                text=""
                                extra="wishlistHeartEmpty"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* STREAMS */}
        <div className="store-section">
          <div className="store-section-header">
            <h4>Games Streaming Now</h4>
            <Button variant="tertiary" text="See more" />
          </div>
          <div className="container store-streams">
            <Carousel pause="hover" className="store-carousel">
              {specialOffersCarouselQty.map((qty) => (
                <Carousel.Item key={qty}>
                  <div className="store-streams-item">
                    {streamedGames.map((game) => (
                      <div key={game.id} className="carousel-card">
                        <img
                          src={`media/images/streams/${game.fileName}.png`}
                          alt={game.name}
                        />
                        <div className="carousel-card-footer">
                          <span className="game-title">{game.name}</span>
                          <div className="footer-container">
                            <div className="viewers-container">
                              <svg
                                width="26"
                                height="20"
                                viewBox="0 0 23 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.75 0.5C6.75 0.5 2.48 3.61 0.75 8C2.48 12.39 6.75 15.5 11.75 15.5C16.75 15.5 21.02 12.39 22.75 8C21.02 3.61 16.75 0.5 11.75 0.5ZM11.75 13C8.99 13 6.75 10.76 6.75 8C6.75 5.24 8.99 3 11.75 3C14.51 3 16.75 5.24 16.75 8C16.75 10.76 14.51 13 11.75 13ZM11.75 5C10.09 5 8.75 6.34 8.75 8C8.75 9.66 10.09 11 11.75 11C13.41 11 14.75 9.66 14.75 8C14.75 6.34 13.41 5 11.75 5Z"
                                  fill="#66C0F4"
                                />
                              </svg>
                              <span className="viewers">
                                ${game.viewersAmount}K
                              </span>
                            </div>
                            <div className="play-btn-container">
                              <Button variant="secondary" text="Store Page" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
