import React from 'react';

import '../styles/Header.css';



const Header = () => {

    return (

                <nav className="header-navbar">
                    <ul className="header-navbar-list">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#team-members-container'>Team</a></li>
                        <li><a href='#projects'>Projects</a></li>
                    </ul>
                </nav>
    )
}

export default Header;