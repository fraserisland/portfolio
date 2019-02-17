import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import Hero from '../components/Hero';
import Listing from '../components/Listing';
import SEO from '../components/seo';

const WorkPage = ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <SEO
      title="Work"
      keywords={[
        'fraser solomon',
        'work',
        'freelancer',
        'web developer',
        'react',
        'javascript',
      ]}
    />
    <Hero
      title="Feel free to look at what work i've done."
      img={data.placeholderImage.childImageSharp.fluid}
    />
    <Listing items={data.allMarkdownRemark.edges} />
  </Layout>
)
};

WorkPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default WorkPage;

export const query = graphql`
  query WorkPageQuery{
    placeholderImage: file(relativePath: { eq: "shape-circle.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "work" } } }) {
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
