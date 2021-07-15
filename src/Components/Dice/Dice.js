import React, { useContext } from 'react'
import DicesContext from "../../Context/dicesContext";
import "../Dice/dice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleChooseIcon } from "../../utils/functions";

const Dice = (props) => {
  const { value, dice } = props;

  const {setSaveDices, saveDices, setHeldDices, heldDices } = useContext(DicesContext)

  const checkPickState = (dice) => {

    const element = document.getElementById(dice)
    const isPickDice = saveDices.includes(element) ? "dice-pick" : "dice-no-pick";
    return isPickDice;
  }


  const pushOrPopDice = (pickDice) => {

    const element = document.getElementById(pickDice)
    // const valueDice = element.dataset.dice

    if(saveDices.includes(element)){
      setSaveDices(saveDices.filter(dice => dice !== element))
    }
    else{
      setSaveDices(saveDices => saveDices.concat(element))
      // setHeldDices(heldDices => heldDices.concat(valueDice))
    }
  }

  const handlePickDice = (pickDice) => {
    pushOrPopDice(pickDice)
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
