import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/store.css';

import StoreHome from '../components/StoreHome/StoreHome';
import StoreBrowse from '../components/StoreBrowse/StoreBrowse';
import StoreDiscover from '../components/StoreDiscover/StoreDiscover';
import StorePointsShop from '../components/StorePointsShop/StorePointsShop';

export default function Store() {
  const { pathname } = useLocation();

  const returnPath = () => {
    if (pathname === '/store' || pathname === '/') {
      return <StoreHome />;
    }
    switch (pathname) {
      case '/store/browse':
        return <StoreBrowse />;

      case '/store/discover':
        return <StoreDiscover />;

      case '/store/points-shop':
        return <StorePointsShop />;

      default:
        return;
    }
  };

  return (
    <div className="store">
      <div className="navbar">
        <div className="buttons-container">
          <Link
            to="/store"
            className={`navbar-button ${pathname === '/store' && 'active'} ${
              pathname === '/' && 'active'
            }`}
          >
            Home
          </Link>
          <Link
            to="/store/browse"
            className={`navbar-button ${
              pathname === '/store/browse' && 'active'
            }`}
          >
            Browse
          </Link>
          <Link
            to="/store/discover"
            className={`navbar-button ${
              pathname === '/store/discover' && 'active'
            }`}
          >
            Discover
          </Link>
          <Link
            to="/store/points-shop"
            className={`navbar-button ${
              pathname === '/store/points-shop' && 'active'
            }`}
          >
            Points Shop
          </Link>
          <Link
            to="/store/curators"
            className={`navbar-button ${
              pathname === '/store/curators' && 'active'
            }`}
          >
            Curators
          </Link>
          <Link
            to="/store/gift-cards"
            className={`navbar-button ${
              pathname === '/store/gift-cards' && 'active'
            }`}
          >
            Gift Cards
          </Link>
          <Link
            to="/store/news"
            className={`navbar-button ${
              pathname === '/store/news' && 'active'
            }`}
          >
            News
          </Link>
        </div>

        <div className="search-container">
          <input className="navbar-input" type="text" placeholder="Search..." />
          <svg
            className="navbar-search-icon"
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
        </div>

        <div className="buttons-container">
          <Link to="/store/wishlist" className="navbar-button">
            Wishlist
          </Link>
          <Link to="/store/cart" className="navbar-button">
            Cart
          </Link>
          <Link to="/settings" className="navbar-button">
            <svg
              className="settings-icon"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1003_1056)">
                <path
                  d="M21.0492 14.0617C21.0926 13.715 21.1251 13.3684 21.1251 13C21.1251 12.6317 21.0926 12.285 21.0492 11.9384L23.3351 10.1509C23.5409 9.98835 23.5951 9.69585 23.4651 9.45752L21.2984 5.70919C21.1684 5.47085 20.8759 5.38419 20.6376 5.47085L17.9401 6.55419C17.3767 6.12085 16.7701 5.76335 16.1092 5.49252L15.6976 2.62169C15.6651 2.36169 15.4376 2.16669 15.1667 2.16669H10.8334C10.5626 2.16669 10.3351 2.36169 10.3026 2.62169L9.8909 5.49252C9.23007 5.76335 8.6234 6.13169 8.06007 6.55419L5.36257 5.47085C5.1134 5.37335 4.83174 5.47085 4.70174 5.70919L2.53507 9.45752C2.39424 9.69585 2.45924 9.98835 2.66507 10.1509L4.9509 11.9384C4.90757 12.285 4.87507 12.6425 4.87507 13C4.87507 13.3575 4.90757 13.715 4.9509 14.0617L2.66507 15.8492C2.45924 16.0117 2.40507 16.3042 2.53507 16.5425L4.70174 20.2909C4.83174 20.5292 5.12424 20.6159 5.36257 20.5292L8.06007 19.4459C8.6234 19.8792 9.23007 20.2367 9.8909 20.5075L10.3026 23.3784C10.3351 23.6384 10.5626 23.8334 10.8334 23.8334H15.1667C15.4376 23.8334 15.6651 23.6384 15.6976 23.3784L16.1092 20.5075C16.7701 20.2367 17.3767 19.8684 17.9401 19.4459L20.6376 20.5292C20.8867 20.6267 21.1684 20.5292 21.2984 20.2909L23.4651 16.5425C23.5951 16.3042 23.5409 16.0117 23.3351 15.8492L21.0492 14.0617ZM13.0001 16.7917C10.9092 16.7917 9.2084 15.0909 9.2084 13C9.2084 10.9092 10.9092 9.20835 13.0001 9.20835C15.0909 9.20835 16.7917 10.9092 16.7917 13C16.7917 15.0909 15.0909 16.7917 13.0001 16.7917Z"
                  fill="#76808C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1003_1056">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

      {returnPath()}
    </div>
  );
}
