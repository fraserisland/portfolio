import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import Footer from '../footer';
import './styles.scss';

const Layout = ({ children }) => (
  <div className="layout__containter">
    <Navbar
      links={[
        { title: 'Home', slug: '/' },
        { title: 'About', slug: '/about' },
        { title: 'Work', slug: '/work' },
      ]}
    />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
