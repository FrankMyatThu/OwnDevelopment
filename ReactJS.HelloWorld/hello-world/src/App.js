import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet></Greet>        
        <Welcome></Welcome> */}
        <Hello></Hello>
      </div>
    );
  }
}

export default App;
