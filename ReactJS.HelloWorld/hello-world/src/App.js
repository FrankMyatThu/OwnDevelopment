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
        <Greet name="Frank" customerName="Batman">
          <p>This is a paragraph</p>
        </Greet> 
        <Greet name="Myat" customerName="John">
          <button>Action</button>
        </Greet> 
        <Greet name="Thu" customerName="Superman"></Greet>
        <Welcome name="Frank" customerName="Batman"></Welcome>
        <Welcome name="Myat" customerName="John"></Welcome>
        <Welcome name="Thu" customerName="Superman"></Welcome>
        {/* <Hello></Hello> */}
      </div>
    );
  }
}

export default App;
