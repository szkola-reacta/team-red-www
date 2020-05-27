import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';



const Header = () => {

    return (

        <div className="header-container">
            <h3 className="header-logo">Team Red</h3>
            <div className="header-navbar-container">
                <nav className="header-navbar">
                    <ul className="header-navbar-list">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;