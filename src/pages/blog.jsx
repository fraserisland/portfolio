import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import Listing from '../components/Listing';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[
          'websites',
          'fraser',
          'solomon',
          'blog',
        ]}
      />
      <Hero
        title="Some pieces i've written, read through, hopefully you enjoy."
        img={data.placeholderImage.childImageSharp.fluid}
      />
      <Listing items={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BlogPage;

export const query = graphql`
  query BlogPageImageQuery {
    placeholderImage: file(relativePath: { eq: "shape-cross.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blog" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
