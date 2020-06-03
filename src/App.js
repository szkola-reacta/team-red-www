import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> master
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
<<<<<<< HEAD
      <Header />
      <Home />
      <Team />
      <Projects />
=======
      <Router>
        <Header />
        <Switch>
          <Route path = '/team'><Team /></Route>
          <Route path = 'project'><Project /></Route>
          <Route path = '/'><Home /></Route>
        </Switch>
      </Router>
>>>>>>> master
      <Footer />
    </div>
  );
  }


export default App;