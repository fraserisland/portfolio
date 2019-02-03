import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Work" keywords={['gatsby', 'application', 'react']} />
    <Hero
      title="Work"
      description="me weerrkrkkkkkk"
      img={data.placeholderImage.childImageSharp.fluid}
    />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;

export const query = graphql`
  query WorkPageQuery{
    placeholderImage: file(relativePath: { eq: "shape-circle.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
