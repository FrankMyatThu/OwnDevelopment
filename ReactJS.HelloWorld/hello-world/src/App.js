import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponet from './components/ParentComponet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponet></ParentComponet>
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <Welcome name="Frank" customerName="Batman"></Welcome> */}
        {/* <Greet name="FrankMyatThu" customerName="Superman"></Greet> */}
        {/* <Counter></Counter> */}
        {/* <Message></Message> */}
        {/* <Greet name="Frank" customerName="Batman">
          <p>This is a paragraph</p>
        </Greet> 
        <Greet name="Myat" customerName="John">
          <button>Action</button>
        </Greet> 
        <Greet name="Thu" customerName="Superman"></Greet>
        <Welcome name="Frank" customerName="Batman"></Welcome>
        <Welcome name="Myat" customerName="Captain America"></Welcome>
        <Welcome name="Thu" customerName="Superman"></Welcome>
        <Hello></Hello> */}
      </div>
    );
  }
}

export default App;
