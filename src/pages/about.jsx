import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import SEO from '../components/seo';
import Hero from '../components/hero';

const About = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      keywords={['about', 'fraser solomon', 'info', 'social']}
    />
    <Hero
      title="Everything you should know about me."
      img={data.placeholderImage.childImageSharp.fluid}
    />
  </Layout>
);

About.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default About;

export const query = graphql`
  query AboutPageQuery{
    placeholderImage: file(relativePath: { eq: "shape-triangle.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
