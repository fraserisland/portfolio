import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Img from "gatsby-image"

const About = ({data}) => (
  <Layout>
    <SEO 
        title="About" 
        keywords={[`gatsby`, `application`, `react`]} 
    />
    <Hero 
        title="About" 
        description="about moiiiii" 
    />
    <h1>About Fraser Solomon</h1>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </Layout>
)

export default About

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
`