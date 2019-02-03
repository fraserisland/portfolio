import React from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero 
      title="Home" 
      description="welcomeweeeee" 
    />
    <h1>Hello, i'm Fraser Solomon</h1>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </Layout>
)

export default IndexPage

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
`