import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ToggleMenu from './components/ToggleMenu';


import './App.css';

class App extends Component 
{
  constructor(props)
  {
      super(props);
      this.state =
      {
          listOn: false
      };


   this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle()
  {
      this.setState({
          listOn: !this.state.listOn
      });
  }
  render()
  {
  return (
    <div className="App">
      <Header />
      <main style = {{marginTop: '20vh'}}/>
      {this.state.listOn ? <ToggleMenu 
      handleToggle = {this.handleToggle}
      /> : undefined}
      CONTENT
      <Footer />
    </div>
  );
  }
}

export default App;