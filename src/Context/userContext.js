import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {  
  const [player, setPlayer] = useState({
    nickname: "",
    playing: false,
  });

  const [heldDice, setHeldDice] = useState([])

  const addHeldDices = (valueDice) => {
    setHeldDice(helDice => heldDice.concat(valueDice))
  }



  const data = { player, setPlayer, addHeldDices, heldDice};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
