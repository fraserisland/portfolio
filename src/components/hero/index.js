import React from 'react';
import PropTypes from "prop-types";

const Hero = (props) => {
  return ( 
    <div>
      <h1>{props.title}</h1>
      {props.description}
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

 
export default Hero;