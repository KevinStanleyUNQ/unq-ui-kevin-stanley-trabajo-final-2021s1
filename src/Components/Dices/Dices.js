import React, { useState } from "react";
import "../Dices/dices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";
import { faDiceFour } from "@fortawesome/free-solid-svg-icons";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons";

const Dices = () => {
  const [randomDice1, setRandomDice1] = useState();
  const [randomDice2, setRandomDice2] = useState();
  const [randomDice3, setRandomDice3] = useState();
  const [randomDice4, setRandomDice4] = useState();
  const [randomDice5, setRandomDice5] = useState();
  const [dices, setDices] = useState([])


  const handleRandomDice = () => {
    const rand1 = Math.floor(Math.random() * 6 + 1);
    setRandomDice1(rand1);
    const rand2 = Math.floor(Math.random() * 6 + 1);
    setRandomDice2(rand2);
    const rand3 = Math.floor(Math.random() * 6 + 1);
    setRandomDice3(rand3);
    const rand4 = Math.floor(Math.random() * 6 + 1);
    setRandomDice4(rand4);
    const rand5 = Math.floor(Math.random() * 6 + 1);
    setRandomDice5(rand5);
    setDices([rand1, rand2, rand3, rand4, rand5])
  };


  const handleChooseIcon = (dice) => {
    switch (dice){
        case 1:
            return faDiceOne
        case 2:
            return faDiceTwo
        case 3:
            return faDiceThree
        case 4:
            return faDiceFour
        case 5:
            return faDiceFive
        default:
            return faDiceSix    
    }


  }

  return (
    <div className="roll-dice">
      <div className="dices">
       {
           dices.map((dice, index) => (
               <button key={index} className="dice">
                   <FontAwesomeIcon id="icon-dice" icon={handleChooseIcon(dice)} />
                   </button>
           ))
       }
      </div>
      <button className="btn-roll-dices" onClick={handleRandomDice}>Click</button>
    </div>
  );
};

export default Dices;
