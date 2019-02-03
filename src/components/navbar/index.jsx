import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Button from '../button';

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
    <Button text="contact" />
  </div>
);

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
