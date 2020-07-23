import React from 'react';
import './App.css';
import { InputChoose } from './InputChoose';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <h1>Roll your dice!</h1>
    <InputChoose />
    <Footer />
  </div>
);

export default App;
