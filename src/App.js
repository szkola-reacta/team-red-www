import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App()
{

  return (
    <div className="App">
      <Header />
      <main style = {{marginTop: '20vh'}}/>
      CONTENT
      <Footer />
    </div>
  );
  }


export default App;