import React, { Component } from 'react';

import './App.css';
import InputChoose from './InputChoose';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenDice: undefined,
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Roll your dice!</h1>
        <InputChoose />
      </div>
    );
  }
}

export default App;
