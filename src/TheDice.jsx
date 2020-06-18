import React from 'react';
import { Component } from 'react';
import D20 from './d20.gif';

export default class TheDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberDice: undefined,
    }

    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    const number = Math.round(Math.random() * (this.props.diceSide - 1) + 1);
    this.setState({numberDice:
      <img src={D20}
      width='70px' alt='dice GIF'/>})
    setTimeout(() => {
      this.setState({ numberDice: number});
    }, 1800);
    setTimeout(() => {
      this.setState({ numberDice: ''});
    }, 10000);
  }

  render() {
    return (
      <div>
        <h1 className='titleDice'>D{this.props.diceSide}</h1>
        <button className='buttonRoll' type="button" onClick={this.rollDice}>
          Roll
        </button>
        <h1 className='titleRolled'>
          {this.state.numberDice}
        </h1>
      </div>
    );
  }
}