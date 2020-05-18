import React from 'react';

import '../css/toggleliststyles.css';

function ToggleList()
{
    return(
        <div className = 'togglelist-container'>
            <ul className = 'ul-toggle'>
                <li className = 'li-toggle'><a href ='/'>Home</a></li>
                <li className = 'li-toggle'><a href = '/'>About</a></li>
                <li className = 'li-toggle'><a href = '/'>Team</a></li>
            </ul>
        </div>
    )
}

export default ToggleList;
