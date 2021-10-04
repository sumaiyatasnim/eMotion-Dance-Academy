import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
// import { instagramsquare } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    // const element = <FontAwesomeIcon icon={'instagram-square'} />
    return (
        <footer className="container-fluid bg-dark py-3">
            <Link className="text-white text-decoration-none" to="/contact">Contact Us</Link>
            <br />
            <small className="text-white"> &#169; 2021 Sumaiya Tasnim</small>
        </footer>
    );
};

export default Footer;