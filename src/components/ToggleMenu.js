import React, {Component} from 'react';

import '../css/togglestyles.css';

import hamburger from '../images/hamburger.svg';

class ToggleMenu extends Component
{

    render()
    {
        return(
            <div className = 'toggle-container'>
                <button onClick = {this.props.handleToggle}>
                    <img src = {hamburger} alt = 'hamburger-icon' />
                </button>
            </div>
        );
    }
}

export default ToggleMenu;