import React from 'react';

import '../css/header-styles.css';

function Header () {
    return (
      <div className='header-container'>
          <nav className = 'header-toolbar'>
             <div className = 'logo'><a href = '/'>LOGO</a>
                </div>
                <div className = "space" />
                    <div className = 'header-menu-sites'>
                     <ul>
                        <li><a href = "/">Home</a></li>
                        <li><a href = "/">About</a></li>
                        <li><a href = "/">Team</a></li>
                     </ul>
                </div>
            </nav>
      </div>
    );
  }

  export default Header;