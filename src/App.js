import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import './App.css';

function App()
{

  return (
    <div className="App">
      <Header />
      <main style = {{marginTop: '20vh'}}/>
      <Content />
      <Footer />
    </div>
  );
  }


export default App;