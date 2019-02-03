import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <Hero 
      title="Work" 
      description="me weerrkrkkkkkk" 
    />
    <h1>Hello, dis my work</h1>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </Layout>
)

export default IndexPage

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
`