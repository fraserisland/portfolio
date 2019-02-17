import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import Hero from '../components/Hero';
import Form from '../components/Form';
import SEO from '../components/seo';

const ContactPage = ({ data }) => (
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
      title="Contact."
      description="asdasd"
      img={data.placeholderImage.childImageSharp.fluid}
    />
    <Form />
  </Layout>
);

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery{
    placeholderImage: file(relativePath: { eq: "shape-cross.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
