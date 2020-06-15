import React from 'react';

import '../css/toggleliststyles.css';

function ToggleList()
{
    return(
        <div className = 'togglelist-container'>
            <ul className = 'ul-toggle'>
                <li className = 'li-toggle'><a href ='#home'>Home</a></li>
                <li className = 'li-toggle'><a href = '#team'>Team</a></li>
                <li className = 'li-toggle'><a href = '#projects-list'>Project</a></li>
            </ul>
        </div>
    )
}

export default ToggleList;
