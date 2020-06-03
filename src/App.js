import React from 'react';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Team from './components/Team';
import Project from './components/Project';
import Home from './components/Home';

import './App.css';

function App()
{

  return (
    <div className="App">
      <Header />
      <Home />
      <Team />
      <Project />
      <Footer />
    </div>
  );
  }


export default App;