import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Team from './components/Team';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        {/* <div>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/team'>Team</Link></li>
                  <li><Link to='/projects'>Projects</Link></li>
              </ul>
          </nav>
        </div> */}

        <Switch>
          <Route path='/team'><Team /></Route>
          <Route path='/projects'><Projects /></Route>
          <Route path='/'><Home /></Route>
        </Switch>

      </Router>

      <Footer />
    </div>
  );
}

export default App;
