import React from 'react';
import { Component } from 'react';
import TheDice from './TheDice';
import './InputChoose.css';

export default class InputChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRolled: 6,
    };

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    this.setState({ diceRolled: Number(e.target.value) });
  }

  render() {
    const { diceRolled } = this.state;
    return (
      <div className="dice-container">
        <form className="form">
          <label className="labelDice" htmlFor="diceSide">
            Choose the dice
          </label>
          <select className="selectInput" onChange={this.changeInput} name="diceSide" id="diceSide">
            <option value="3">D3</option>
            <option value="4">D4</option>
            <option selected="selected" value="6">
              D6
            </option>
            <option value="8">D8</option>
            <option value="10">D10</option>
            <option value="12">D12</option>
            <option value="20">D20</option>
            <option value="100">D100</option>
          </select>
        </form>
        <TheDice diceSide={diceRolled} className="dice" />
      </div>
    );
  }
}
