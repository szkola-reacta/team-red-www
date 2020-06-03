import React from 'react';
import '../css/home-styles.css';
import arrow from '../images/arrow.png'

<<<<<<< HEAD
import '../styles/Home.css';

const Home = () => <div id='home'>Home</div>
=======

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
>>>>>>> master

export default Home;