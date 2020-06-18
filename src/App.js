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
        <footer>
          <p>Desenvolvido por &nbsp;
            <a href="https://www.linkedin.com/in/henrique-ba%C3%AAta-leite-785a4b15a/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              Henrique Baêta Leite
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
