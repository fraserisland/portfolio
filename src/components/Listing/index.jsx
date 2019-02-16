import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Listing = ({ items }) => (
  <div className="listing__container">
    <div className="layout__max">

      {
        items.map(item => (
          <div>
            {item.title}
          </div>
        ))
      }

    </div>
  </div>
);

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Listing;
