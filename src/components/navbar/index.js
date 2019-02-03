import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';

export const Navbar = (props) => {
    return ( 
        <div>
            {
                props.links.map(link => (
                    <Link 
                        key={link.title} 
                        to={link.slug}>
                        {link.title}
                    </Link>
                ))
            }
        </div>
    );
}


Navbar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Navbar;