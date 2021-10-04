import React from 'react';
import './Banner.css'
import logo from '../../Images/logo/dance.png';
const Banner = () => {
    return (
        <div className="container ">
            <img src={logo} className="w-100 logo" alt=""></img>
        </div>
    );
};

export default Banner;