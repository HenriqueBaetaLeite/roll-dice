import React from 'react';
import { Component } from 'react';
import D20 from './d20.gif';

export default class TheDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberDice: undefined,
      imgDice: undefined,
    };

    this.rollDice = this.rollDice.bind(this);
  }

  async rollDice() {
    const number = Math.round(Math.random() * (this.props.diceSide - 1) + 1);
    this.setState((prevState) => ({ ...prevState, imgDice: <img src={D20} width="70px" alt="dice GIF" /> }));
    setTimeout(() => {
      this.setState(() => ({ imgDice: undefined }));
      this.setState(() => ({ numberDice: number }));
    }, 1800);
    setTimeout(() => {
      this.setState((prevState) => ({ ...prevState, numberDice: undefined }));
    }, 10000);
  }

  render() {
    const { diceSide } = this.props;
    const { imgDice, numberDice } = this.state;
    return (
      <div>
        <h1 className="titleDice">D{diceSide}</h1>
        <button className="buttonRoll" type="button" onClick={this.rollDice}>
          Roll
        </button>
        <h1 className="titleRolled">
          {imgDice}
          {numberDice}
        </h1>
      </div>
    );
  }
}
