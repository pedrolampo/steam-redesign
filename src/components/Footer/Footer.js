import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container trademarks">
        <div className="logos-container">
          <img
            className="footer-logo"
            alt="valve logo"
            src="/media/images/valve-logo.png"
          />
          <img
            className="footer-logo"
            alt="steam logo"
            src="/media/images/steam-logo-big-grey.png"
          />
        </div>
        <span>
          © 2023 Valve Corporation. All rights reserved.
          <br />
          All trademarks are property of their respective
          <br />
          owners in the US and other countries.
          <br />
          VAT included in all prices where applicable.
        </span>
      </div>

      <div className="footer-container about">
        <span>About Valve</span>
        <span>Jobs</span>
        <span>Steamworks</span>
        <span>Steam Distribution</span>
        <span>Support</span>
      </div>
      <div className="footer-container about">
        <span>Privacy Policy</span>
        <span>Legal</span>
        <span>Steam Subscriber Agreement</span>
        <span>Refunds</span>
        <span>Cookies</span>
      </div>

      <div className="footer-container socials">
        <img alt="facebook logo" src="/media/images/fb-logo.png" />
        <img alt="twitter logo" src="/media/images/tw-logo.png" />
      </div>
    </div>
  );
}
