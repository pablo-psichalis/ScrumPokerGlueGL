import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Scrum Poker</h1>
          {this.props.children}
        </header>
      </div>
    );
  }
}
export default App;
