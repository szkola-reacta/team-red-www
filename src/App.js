import React from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Team from './components/Team';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Team />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
