import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './styles.scss';

const Listing = ({ items }) => (
  <div className="listing__container">
    <div className="layout__max">

      {
        items.map(item => (
          <Link key={item.node.frontmatter.title} to={item.node.frontmatter.path}>
            {item.node.frontmatter.title}
          </Link>
        ))
      }

    </div>
  </div>
);

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Listing;
