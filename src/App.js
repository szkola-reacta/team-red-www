import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


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
      <Router>
        <Header />
        <Switch>
          <Route path = '/team'><Team /></Route>
          <Route path = 'project'><Project /></Route>
          <Route path = '/'><Home /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
  }


export default App;