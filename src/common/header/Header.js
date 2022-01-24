import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

const Header = function() {
    return (
        <div className="header">
            <img src={logo} alt="logo-img" />
        </div>
    )
}

export default Header;