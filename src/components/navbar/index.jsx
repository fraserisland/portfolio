import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Navbar = ({ links }) => (
  <div className="navbar__container">
    {
      links.map(link => (
        <Link
          key={link.title}
          to={link.slug}
        >
          {link.title}
        </Link>
      ))
    }
  </div>
);

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
