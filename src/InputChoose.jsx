import React, { useState } from 'react';
import TheDice from './TheDice';
import './InputChoose.css';

const sides = [3, 4, 6, 8, 10, 12, 20, 100];

export const InputChoose = () => {
  const [dice, setDice] = useState(3);

  return (
    <div className="dice-container">
      <form className="form">
        <label className="labelDice" htmlFor="diceSide">
          Choose the dice
        </label>
        <select
          className="selectInput"
          onChange={(e) => setDice(Number(e.target.value))}
          name="diceSide"
          id="diceSide"
        >
          {sides.map((side) => (
            <option key={side} value={side}>
              D{side}
            </option>
          ))}
        </select>
      </form>
      <TheDice diceSide={dice} className="dice" />
    </div>
  );
};
