import React from 'react';
// import PropTypes from 'prop-types';

const Footer = () => (
  <div className="footer__container">
    <footer>
      ©
      {
        new Date().getFullYear()
      }
      , Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
);

// Footer.propTypes = {
//   links: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default Footer;
