import React, { useContext, useState } from 'react'
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
  const { value, dice } = props;

  const {addHeldDices, heldDice, setSaveDices, saveDices } = useContext(UserContext)


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

  const verifyDices = (element) => {
    if(saveDices.includes(element)){
      const index = saveDices.findIndex(e => e === element)
       
    }

  }

  const handlePickDice = (pickDice) => {

    const div = document.getElementById(pickDice)
    verifyDices(div)

    // addHeldDices(value)
    console.log(div)
    console.log(saveDices)

  }

  return (
      <div 
        key={dice}
        id={dice}
        className={checkPickState(dice)} 
        onClick={() => handlePickDice(dice)}
        data-dice={value}
      >
        <FontAwesomeIcon id="icon-dice" icon={handleChooseIcon(value)} />
      </div>
  );
};

export default Dice;
