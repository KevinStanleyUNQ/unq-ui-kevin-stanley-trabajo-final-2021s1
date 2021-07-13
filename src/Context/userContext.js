import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {  
  const [player, setPlayer] = useState({
    nickname: "",
    playing: false,
  });

  const [heldDice, setHeldDice] = useState([])

  const [saveDices, setSaveDices] = useState([])

  const addHeldDices = (valueDice) => {
    if(heldDice.length < 5){
      setHeldDice(heldDice => heldDice.concat(valueDice))
      console.log(heldDice)
    } 
  }



  const data = { player, setPlayer, addHeldDices, heldDice, setHeldDice, saveDices, setSaveDices};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
