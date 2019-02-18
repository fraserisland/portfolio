import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './styles.scss';

const Hero = ({ title, description, img }) => (
  <div className="hero__container">
    <div className="layout__max">
      <h1 className="hero__title">{title}</h1>
      <div className="hero__description">{description}</div>
      <div className="hero__img--holder">
        <Img className="hero__img" fluid={img} />
      </div>
    </div>
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
