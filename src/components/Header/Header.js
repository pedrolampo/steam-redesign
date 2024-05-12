import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

export default function Header({ user }) {
  const headers = [
    {
      id: 'store',
      tag: 'STORE',
    },
    {
      id: 'community',
      tag: 'COMMUNITY',
    },
    {
      id: 'profile',
      tag: user.username.toUpperCase(),
    },
    {
      id: 'library',
      tag: 'LIBRARY',
    },
    {
      id: 'downloads',
      tag: 'DOWNLOADS',
    },
  ];
  const { pathname } = useLocation();

  return (
    <div className="header">
      <div style={{ display: 'flex' }}>
        <Link to="/" className="steam-logo-container">
          <img
            src="/media/images/steam-logo-big.png"
            alt="steam logo"
            className="header-steam-logo"
          />
        </Link>
        <div className="sections">
          {headers.map((header) => (
            <Link key={header.id} className="header-link" to={`/${header.id}`}>
              <div
                className={`indiv-header ${
                  pathname.includes(header.id) && 'active'
                } ${(pathname === '/') & (header.id === 'store') && 'active'}`}
              >
                {header.tag}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="user-section">
        <div className="user-section-button friends-button">
          <img alt="friends icon" src="media/images/friends-icon.png" />
        </div>
        <div className="user-section-button notifications-button">
          <img alt="notifications icon" src="media/images/notif-icon.png" />
        </div>
        <div className="user-section-button user-button">
          <img
            className="profile-picture"
            alt="profile"
            src="media/images/profile-picture.jpg"
          />
          {user.username} <span className="wallet-funds">$4.20</span>
          <img
            alt="dropdown arrow icon"
            src="media/images/dropdown-arrow.png"
          />
        </div>
        <Link to="/support" className="help">
          Help
        </Link>
        <div className="view">
          View
          <img
            alt="dropdown arrow"
            src="media/images/dropdown-arrow-grey.png"
          />
        </div>
      </div>
    </div>
  );
}
