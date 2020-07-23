import React from 'react';
import { Component } from 'react';
import D20 from './d20.gif';

export default class TheDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberDice: undefined,
      imgDice: undefined,
      disableButton: false,
    };
    this.time = '';
  }

  rollDice = () => {
    clearTimeout(this.time);
    const number = Math.round(Math.random() * (this.props.diceSide - 1) + 1);
    this.setState((prevState) => ({ ...prevState, disableButton: true, numberDice: undefined }));
    this.setState({ imgDice: <img src={D20} width="70px" alt="dice GIF" /> });
    setTimeout(() => {
      this.setState({ imgDice: undefined, numberDice: number, disableButton: false });
    }, 1800);
    this.time = setTimeout(() => {
      this.setState({ numberDice: undefined });
    }, 10000);
  };

  render() {
    const { diceSide } = this.props;
    const { imgDice, numberDice, disableButton } = this.state;
    return (
      <div>
        <h1 className="titleDice">D{diceSide}</h1>
        <button
          disabled={disableButton}
          className="buttonRoll"
          type="button"
          onClick={this.rollDice}
        >
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
