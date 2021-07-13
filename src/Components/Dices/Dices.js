import React, { useState, useContext } from "react";
import UserContext from "../../Context/userContext";
import "../Dices/dices.css";
import Dice from "../Dice/Dice";
const Dices = () => {

  const [dices, setDices] = useState([]);

  const { setHeldDice } = useContext(UserContext)


  const handleDicesGenerate = () => {
    const dicesGenerate = [0,0,0,0,0].map((dice) => Math.floor(Math.random() * 6 + 1));
    setDices(dicesGenerate)
    setHeldDice([])
  }

  const listDices =  dices.map((dice,index) => (
    <Dice value={dice} key={index} dice={index} />
 ))

  return (
    <div className="roll-dice">
    <div className="dices-container">
     {
       listDices
     }
  </div>
    <button className="btn-roll-dices" onClick={handleDicesGenerate}>Click</button>
    </div>
  );
};

export default Dices;
