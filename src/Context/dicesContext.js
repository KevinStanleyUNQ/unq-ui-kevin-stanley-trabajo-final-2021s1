import React, { createContext, useState } from "react";

const DicesContext = createContext();


const DicesProvider = ({ children }) => {

    const [heldDices, setHeldDices] = useState([])

    const [saveDices, setSaveDices] = useState([])

    const [dicesOnTable, setDicesOnTable] = useState([])
  
    const addHeldDices = (valueDice) => {
      if(heldDices.length < 5){
        setHeldDices(heldDice => heldDice.concat(valueDice))
        // console.log(heldDice)
      } 
    }
  
    const data = { addHeldDices, heldDices, setHeldDices, saveDices, setSaveDices, dicesOnTable, setDicesOnTable } 

    return <DicesContext.Provider value={data}>{children}</DicesContext.Provider>;
   
}

export { DicesProvider }
export default DicesContext
