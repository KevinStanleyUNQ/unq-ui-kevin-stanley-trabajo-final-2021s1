import React, { useContext } from 'react'
import UserContext from "../../Context/userContext";
import "../Dice/dice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";
import { faDiceFour } from "@fortawesome/free-solid-svg-icons";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons";

const Dice = (props) => {
  const { value, index } = props;
  console.log(index)

  const { player, setPlayer, addHeldDices, heldDice } = useContext(UserContext)

  const checkPickState = (dice) => {

    const isPickDice = heldDice.includes(dice) ? "dice-pick" : "dice-no-pick";
    return isPickDice;
  };

  const handleChooseIcon = (dice) => {
    switch (dice) {
      case 1:
        return faDiceOne;
      case 2:
        return faDiceTwo;
      case 3:
        return faDiceThree;
      case 4:
        return faDiceFour;
      case 5:
        return faDiceFive;
      case 6:
        return faDiceSix;
      default:
        return faDice;
    }
  };

  const handlePickDice = (value) => {
    console.log("Agrego el dado: " + value)
    addHeldDices(value)
  }

  return (
    <div className="roll-dice">
    <div className="dices"> 
      <button key={index} className={checkPickState(value)} onClick={() => handlePickDice(value)}>
        <FontAwesomeIcon id="icon-dice" icon={handleChooseIcon(value)} />
      </button>
      </div>
      </div>
  );
};

export default Dice;
