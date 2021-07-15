import React, { useContext } from "react";
import DicesContext from "../../Context/dicesContext";
import DicePick from "../DicePick/DicePick";
import "../DicesPick/dicesPick.css";

const DicesPick = () => {
  const { saveDices } = useContext(DicesContext);

  const listValuesDicesPick = saveDices.map(item => item.dataset.dice)

  const listDicesPick = () => {
    const pickDices = listValuesDicesPick.map((valueDice, index) => (
      <DicePick value={valueDice} key={index} dice={index} />
    ));

    return pickDices;
  };

  return (
    <div className="all-dices-pick">
      <div className="all-dices-pick-container">
        <h4 className="text-dices-pick">Pick Dices:</h4>
        {listDicesPick()}
      </div>
    </div>
  );
};

export default DicesPick;
