import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import Hero from '../components/hero';
import SEO from '../components/seo';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={['gatsby', 'application', 'react']} />
    <Hero
      title="Some pieces i've written, read through, hopefully you enjoy."
      img={data.placeholderImage.childImageSharp.fluid}
    />
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BlogPage;

export const query = graphql`
  query BlogPageQuery{
    placeholderImage: file(relativePath: { eq: "shape-cross.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
