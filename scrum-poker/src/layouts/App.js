import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Scrum Poker</h2>
        </header>
        {this.props.children}

        <div className="App-footer">
          <p>Made with ♥ by Pablo Psichalis</p>
        </div>
      </div>
    );
  }
}
export default App;
