import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Hero = ({ title, description, img }) => (
  <div>
    <h1>{title}</h1>
    <div>{description}</div>
    <Img fluid={img} />
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
