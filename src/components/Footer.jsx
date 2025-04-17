import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© {new Date().getFullYear()} Opium Visuals. All rights reserved.</p>
        <div className="footer__social">
          <a
            href="https://instagram.com/opiumvisuals"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
