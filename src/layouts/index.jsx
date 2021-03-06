import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/main.scss';
import './styles.scss';

const Layout = ({ children }) => (
  <div className="layout__containter">
    <Navbar
      links={[
        { title: 'Home', slug: '/' },
        { title: 'About', slug: '/about' },
        { title: 'Work', slug: '/work' },
        { title: 'Blog', slug: '/blog' },
        { title: 'Contact', slug: '/contact' },
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
