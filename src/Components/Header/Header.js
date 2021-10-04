import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <div><h1>eMotion</h1></div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-s navbar-expand-xs navbar-dark bg-dark navbar-inverse fixed-top ">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/classes">Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;

