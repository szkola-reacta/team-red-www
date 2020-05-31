import React from 'react';
import '../css/home-styles.css';
import arrow from '../images/arrow.png'


function Home()
{
    return(
        <div className = 'home-container'>
            <div className = 'get-demo-text'>
                <p>GET YOUR DEMO <img src = {arrow} alt = 'arrow'/> </p>
                </div>
            
        </div>
    );
}

export default Home;