import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const Message = props => <div>{props.children}</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Message>qqq
<Message>qqq2 </Message>

        </Message>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
