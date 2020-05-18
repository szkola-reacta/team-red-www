import React, {Fragment, Component} from 'react';
import ToggleMenu from '../components/ToggleMenu';
import ToggleList from '../components/ToggleList';

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
                          <li><a href = "/">Home</a></li>
                          <li><a href = "/">About</a></li>
                          <li><a href = "/">Team</a></li>
                      </ul>
                  </div>
            </nav>
            <nav className = 'header-toggle-menu'>
             <ToggleMenu handleToggle = {this.handleToggle}/>
            </nav>
        </div>
        {this.state.listOn ? <ToggleList/> : undefined}

      </Fragment>
    );
  }
}

  export default Header;