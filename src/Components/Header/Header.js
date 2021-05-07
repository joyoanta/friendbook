import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
           <img src={logo} alt=""/>
           <nav>
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="contact">Contact</a>
            <a href="donation">Donation</a>

           </nav>
           
        </div>
    );
};

export default Header;