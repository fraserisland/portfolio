import React from "react"
import PropTypes from "prop-types"
import Navbar from '../navbar'

import './styles.scss'

const Layout = ({ children }) => (
    <div className="layout__containter">
      <Navbar 
        links={[
          {title: "About", slug: "/about"}, 
          {title: "Work", slug: "/work"},
          {title: "Home", slug: "/"},
        ]} 
      />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
