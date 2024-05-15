import React, { useState } from 'react';
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
  const userDropdownBtns = [
    {
      label: 'Account Details',
      path: '/settings',
    },
    {
      label: 'Wallet',
      path: '/settings',
    },
    {
      label: 'Settings',
      path: '/settings',
    },
    {
      label: 'Client Updates',
      path: '/settings',
    },
    {
      label: 'Go Offline',
      path: '/',
    },
    {
      label: 'Change Account',
      path: '/',
    },
    {
      label: 'Sign Out',
      path: '/',
    },
    {
      label: 'Exit',
      path: '/',
    },
  ];

  const [userDropdownShow, setUserDropDownShow] = useState(false);
  const [notifDropdownShow, setNotifDropDownShow] = useState(false);
  const [friendsDropdownShow, setFriendsDropDownShow] = useState(false);

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
        <div
          onClick={() => {
            setNotifDropDownShow(false);
            setUserDropDownShow(false);
            setFriendsDropDownShow((prev) => !prev);
          }}
          className="user-section-button friends-button"
        >
          <img alt="friends icon" src="/media/images/friends-icon.png" />

          <div
            onClick={() => {
              return;
            }}
            className={`friends-dropdown dropdown ${
              friendsDropdownShow && 'show'
            }`}
          >
            <div className="notif-drop-header"></div>

            <div className="friends-drop-body">
              <div className="friends-drop-tab">
                <div className="friends-header"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setFriendsDropDownShow(false);
            setUserDropDownShow(false);
            setNotifDropDownShow((prev) => !prev);
          }}
          className="user-section-button notifications-button"
        >
          <img alt="notifications icon" src="/media/images/notif-icon.png" />

          <div
            onClick={() => {
              return;
            }}
            className={`notifications-dropdown dropdown ${
              notifDropdownShow && 'show'
            }`}
          >
            <div className="notif-drop-header">
              <h6>Notifications</h6>
              <div className="notif-drop-btns">
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_766_10353)">
                      <path
                        d="M14.2897 16.8544C13.981 17.1632 13.4822 17.1632 13.1735 16.8544L11.4952 15.1761C11.1864 14.8673 11.1864 14.3686 11.4952 14.0598C11.8039 13.7511 12.3027 13.7511 12.6114 14.0598L13.7277 15.1761L16.5302 12.3736C16.8389 12.0648 17.3377 12.0648 17.6464 12.3736C17.9552 12.6823 17.9552 13.1811 17.6464 13.4898L14.2897 16.8544ZM9.5635 15.8332H3.16683C2.296 15.8332 1.5835 15.1207 1.5835 14.2498V4.74984C1.5835 3.879 2.296 3.1665 3.16683 3.1665H15.8335C16.7043 3.1665 17.4168 3.879 17.4168 4.74984V10.0382C16.6964 9.69775 15.8968 9.49984 15.0418 9.49984C11.9781 9.49984 9.50016 11.9778 9.50016 15.0415C9.50016 15.3107 9.52391 15.5719 9.5635 15.8332ZM9.08058 10.0303C9.33391 10.1886 9.66641 10.1886 9.91975 10.0303L15.5168 6.53109C15.7147 6.40442 15.8335 6.19067 15.8335 5.96109C15.8335 5.43067 15.2556 5.114 14.8043 5.39109L9.50016 8.70817L4.196 5.39109C3.74475 5.114 3.16683 5.43067 3.16683 5.96109C3.16683 6.19067 3.28558 6.40442 3.4835 6.53109L9.08058 10.0303Z"
                        fill="#76808C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_766_10353">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <Link to="/settings">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_766_10367)">
                        <path
                          d="M15.3823 10.276C15.414 10.0227 15.4377 9.76933 15.4377 9.50016C15.4377 9.231 15.414 8.97766 15.3823 8.72433L17.0527 7.41808C17.2032 7.29933 17.2427 7.08558 17.1477 6.91141L15.5644 4.17225C15.4694 3.99808 15.2557 3.93475 15.0815 3.99808L13.1102 4.78975C12.6986 4.47308 12.2552 4.21183 11.7723 4.01391L11.4715 1.916C11.4477 1.726 11.2815 1.5835 11.0836 1.5835H7.91691C7.71899 1.5835 7.55274 1.726 7.52899 1.916L7.22816 4.01391C6.74524 4.21183 6.30191 4.481 5.89024 4.78975L3.91899 3.99808C3.73691 3.92683 3.53107 3.99808 3.43607 4.17225L1.85274 6.91141C1.74982 7.08558 1.79732 7.29933 1.94774 7.41808L3.61816 8.72433C3.58649 8.97766 3.56274 9.23891 3.56274 9.50016C3.56274 9.76141 3.58649 10.0227 3.61816 10.276L1.94774 11.5822C1.79732 11.701 1.75774 11.9147 1.85274 12.0889L3.43607 14.8281C3.53107 15.0022 3.74482 15.0656 3.91899 15.0022L5.89024 14.2106C6.30191 14.5272 6.74524 14.7885 7.22816 14.9864L7.52899 17.0843C7.55274 17.2743 7.71899 17.4168 7.91691 17.4168H11.0836C11.2815 17.4168 11.4477 17.2743 11.4715 17.0843L11.7723 14.9864C12.2552 14.7885 12.6986 14.5193 13.1102 14.2106L15.0815 15.0022C15.2636 15.0735 15.4694 15.0022 15.5644 14.8281L17.1477 12.0889C17.2427 11.9147 17.2032 11.701 17.0527 11.5822L15.3823 10.276ZM9.50024 12.271C7.97232 12.271 6.72941 11.0281 6.72941 9.50016C6.72941 7.97225 7.97232 6.72933 9.50024 6.72933C11.0282 6.72933 12.2711 7.97225 12.2711 9.50016C12.2711 11.0281 11.0282 12.271 9.50024 12.271Z"
                          fill="#76808C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_766_10367">
                          <rect width="19" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="notif-drop-body">
              <div className="notif-drop-item">
                <div className="notification-header">
                  <div>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_766_10374)">
                        <path
                          d="M11.3335 7.7915C12.5093 7.7915 13.4514 6.84234 13.4514 5.6665C13.4514 4.49067 12.5093 3.5415 11.3335 3.5415C10.1577 3.5415 9.2085 4.49067 9.2085 5.6665C9.2085 6.84234 10.1577 7.7915 11.3335 7.7915ZM5.66683 7.7915C6.84266 7.7915 7.78475 6.84234 7.78475 5.6665C7.78475 4.49067 6.84266 3.5415 5.66683 3.5415C4.491 3.5415 3.54183 4.49067 3.54183 5.6665C3.54183 6.84234 4.491 7.7915 5.66683 7.7915ZM5.66683 9.20817C4.01641 9.20817 0.708496 10.0369 0.708496 11.6873V12.7498C0.708496 13.1394 1.02725 13.4582 1.41683 13.4582H9.91683C10.3064 13.4582 10.6252 13.1394 10.6252 12.7498V11.6873C10.6252 10.0369 7.31725 9.20817 5.66683 9.20817ZM11.3335 9.20817C11.1281 9.20817 10.8943 9.22234 10.6464 9.24359C10.6606 9.25067 10.6677 9.26484 10.6747 9.27192C11.4822 9.85984 12.0418 10.6461 12.0418 11.6873V12.7498C12.0418 12.9978 11.9922 13.2386 11.9143 13.4582H15.5835C15.9731 13.4582 16.2918 13.1394 16.2918 12.7498V11.6873C16.2918 10.0369 12.9839 9.20817 11.3335 9.20817Z"
                          fill="#76808C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_766_10374">
                          <rect width="17" height="17" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Community
                  </div>

                  <div className="notification-icon"></div>
                </div>

                <div className="notification-body">
                  <span>Your Friend</span> left a comment on your profile.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setFriendsDropDownShow(false);
            setNotifDropDownShow(false);
            setUserDropDownShow((prev) => !prev);
          }}
          className="user-section-button user-button"
        >
          <img
            className="profile-picture"
            alt="profile"
            src="/media/images/profile-picture.jpg"
          />
          {user.username} <span className="wallet-funds">$4.20</span>
          <img
            alt="dropdown arrow icon"
            src="/media/images/dropdown-arrow.png"
          />
          <div
            className={`user-dropdown dropdown ${userDropdownShow && 'show'}`}
          >
            {userDropdownBtns.map((btn) => (
              <Link key={btn.label} to={btn.path} className="user-dropdown-btn">
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/support" className="help">
          Help
        </Link>

        <div className="view">
          View
          <img
            alt="dropdown arrow"
            src="/media/images/dropdown-arrow-grey.png"
          />
        </div>
      </div>
    </div>
  );
}
