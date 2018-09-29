import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "buttermilk";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div className="NavBar">
            <Link href="/home">Home</Link> || <Link href="/blocks">Blocks</Link>
          </div>
        </header>
        <div>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeave={false}
          >
            {this.props.children}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
