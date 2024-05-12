import React from 'react';
import { Link } from 'react-router-dom';
import './styles/community.css';

export default function Community() {
  return (
    <div className="community">
      <div className="navbar">
        <div className="buttons-container">
          <Link to="/community" className="navbar-button active">
            Home
          </Link>
          <Link to="/community/discussion" className="navbar-button">
            Discussion
          </Link>
          <Link to="/community/workshop" className="navbar-button">
            Workshop
          </Link>
          <Link to="/community/market" className="navbar-button">
            Market
          </Link>
          <Link to="/community/broadcasts" className="navbar-button">
            Broadcasts
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
      </div>
    </div>
  );
}
