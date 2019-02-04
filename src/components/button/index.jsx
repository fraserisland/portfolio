import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, size }) => (
  <button type="button" className={`button__container--${size}`}>
    {text}
  </button>
);

Button.defaultProps = {
  size: 'medium',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Button;
