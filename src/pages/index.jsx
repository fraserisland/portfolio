import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import Hero from '../components/Hero';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'fraser solomon',
        'freelance',
        'web developer',
        'react',
        'javascript']}
    />
    <Hero
      title={(
        <div>
          I am Fraser Solomon.
          <br />
          A Web Developer based in the Gold Coast.
        </div>
      )}
      img={data.placeholderImage.childImageSharp.fluid}
    />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery{
    placeholderImage: file(relativePath: { eq: "shape-square.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
