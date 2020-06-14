import React from 'react';
import '../css/home-styles.css';


function Home()
{
    return(
        <div id="home" className = 'home-container'>
            <div className = 'home-text'><h2>Jakiś tekst ads asd ads asd asdadsf</h2></div>
            <div className = 'get-demo-text'>
                <button className="app-btn"><a href="/">Use app</a></button>
            </div>
        </div>
    );
}

export default Home;