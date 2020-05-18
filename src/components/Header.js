import React, {Fragment} from 'react';
import ToggleMenu from '../components/ToggleMenu';
import ToggleList from '../components/ToggleList';

import '../css/header-styles.css';
import logo from '../images/Team-red.png';

function Header () {
    return (
      <Fragment>
        <div className='header-container'>
            <nav className = 'header-toolbar'>
              <div className = 'logo'><a href = '/'><img src = {logo} alt = 'team-logo'/></a>
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
            <nav className = 'header-toggle-menu'>
             <ToggleMenu/>
            </nav>
        </div>
        <ToggleList/>

      </Fragment>
    );
  }

  export default Header;