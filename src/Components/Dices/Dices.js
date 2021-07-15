import React, { useState, useContext, useEffect } from "react";
import DicesContext from "../../Context/dicesContext";
import "../Dices/dices.css";
import Dice from "../Dice/Dice";
const Dices = () => {

  const [dices, setDices] = useState([]);

  const { setHeldDices, saveDices, setSaveDices, heldDices, setDicesOnTable } = useContext(DicesContext)

  useEffect(() => {}, [saveDices]) // eslint-disable-line react-hooks/exhaustive-deps


  const handleDicesGenerate = () => {
    const dicesGenerate = [0,0,0,0,0].map((dice) => Math.floor(Math.random() * 6 + 1));
    setDices(dicesGenerate) // ================ Debo sacar esto, ahora los dados estan en el contexto =================================
    setDicesOnTable(dicesGenerate)
    setSaveDices([])
  }

  const handleDices = () => {

    const newListDices = dices.map((dice,index) => (
      <Dice value={dice} key={index} dice={index} />
   ))
   return newListDices
  }

  return (
    <div className="roll-dice">
    <div className="dices-container">
     {
       handleDices()
     }
  </div>
    <button className="btn-roll-dices" onClick={handleDicesGenerate}>Click</button>
    </div>
  );
};

export default Dices;
