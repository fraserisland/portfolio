import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './styles.scss';

const Navbar = ({ links }) => (
  <div className="navbar__container">
    <div className="navbar__links-holder">
      {
        links.map(link => (
          <Link
            className="navbar__link"
            key={link.title}
            to={link.slug}
          >
            {link.title}
          </Link>
        ))
      }
    </div>
  </div>
);

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
