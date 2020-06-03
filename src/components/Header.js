<<<<<<< HEAD
import React from 'react';
=======
import React, {Fragment, Component} from 'react';
import ToggleMenu from '../components/ToggleMenu';
import ToggleList from '../components/ToggleList';
import { Link } from 'react-router-dom';
>>>>>>> master

import '../css/header-styles.css';

import logo from '../images/Team-red.png';


class Header extends Component {
  constructor(props)
  {
      super(props);
      this.state =
      {
          listOn: true
      };


   this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle()
  {
      this.setState({
          listOn: !this.state.listOn
      });
  }
  render(){
    return (
      <Fragment>
        <div className='header-container'>
            <nav className = 'header-toolbar'>
              <div className = 'logo'><a href = '/'><img src = {logo} alt = 'team-logo'/></a>
                  </div>
                  <div className = "space" />
                      <div className = 'header-menu-sites'>
                      <ul>
                          <li><Link to = "/">Home</Link></li>
                          <li><Link to = "/team">Team</Link></li>
                          <li><Link to = "/project">Project</Link></li>
                      </ul>
                  </div>
            </nav>
            <nav className = 'header-toggle-menu'>
             <ToggleMenu handleToggle = {this.handleToggle}/>
            </nav>

<<<<<<< HEAD
                <nav className="header-navbar">
                    <ul className="header-navbar-list">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#team-members-container'>Team</a></li>
                        <li><a href='#projects'>Projects</a></li>
                    </ul>
                </nav>
    )
=======
        </div>
        {this.state.listOn ? <ToggleList/> : undefined}

      </Fragment>
    );
  }
>>>>>>> master
}

  export default Header;