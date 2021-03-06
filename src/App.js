import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SayHello } from "./SayHello";

const Message = props => <div>{props.children}</div>;

class MessageIf extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>{message ? <div> {message} </div> : <div> No message </div>}</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MessageIf message="test" />
        <MessageIf />
        <Message>
          qqq
          <Message>qqq2 </Message>
        </Message>
        <SayHello firstName="Jojo" lastName="Freeman" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
