import React, { useEffect, useState } from "react";
import "../Dices/dices.css";
import Dice from "../Dice/Dice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";
import { faDiceFour } from "@fortawesome/free-solid-svg-icons";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons";

const Dices = () => {
  const initValue = {
    value: 0,
    state: false
  };

  const [randomDice1, setRandomDice1] = useState(initValue);
  const [randomDice2, setRandomDice2] = useState(initValue);
  const [randomDice3, setRandomDice3] = useState(initValue);
  const [randomDice4, setRandomDice4] = useState(initValue);
  const [randomDice5, setRandomDice5] = useState(initValue);
  const [dices, setDices] = useState([]);


  const handleDicesGenerate = () => {

    const dicesGenerate = [0,0,0,0,0].map((dice) => Math.floor(Math.random() * 6 + 1));
    setDices(dicesGenerate)
  }

  




  const handleRandomDice = () => {
    const rand1 = Math.floor(Math.random() * 6 + 1);
    setRandomDice1({ ...randomDice1, value: rand1 });

    const rand2 = Math.floor(Math.random() * 6 + 1);
    setRandomDice2({ ...randomDice2, value: rand2 });

    const rand3 = Math.floor(Math.random() * 6 + 1);
    setRandomDice3({ ...randomDice3, value: rand3 });

    const rand4 = Math.floor(Math.random() * 6 + 1);
    setRandomDice4({ ...randomDice4, value: rand4 });

    const rand5 = Math.floor(Math.random() * 6 + 1);
    setRandomDice5({ ...randomDice5, value: rand5 });
    

    setDices([randomDice1, randomDice2, randomDice3, randomDice4, randomDice5])
    
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

  // const checkPickState = (state) => {

  //   const isPickDice = state ? "dice-pick" : "dice-no-pick";
  //   return isPickDice;
  // }

  const listDices =  dices.map((dice,index) => (
    <Dice value={dice} key={index} />
 ))

  return (
    <div className="dices-container">
     {
       listDices
     }
    <button className="btn-roll-dices" onClick={handleDicesGenerate}>Click</button>
  </div>
  );
};

export default Dices;
