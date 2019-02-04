import React from 'react';
// import PropTypes from 'prop-types';

const Footer = () => (
  <div className="footer__container">
    <div className="layout__max">
      <footer>
        ©
        {
          new Date().getFullYear()
        }
        , Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </div>
);

// Footer.propTypes = {
//   links: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default Footer;
