import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {  
  const [player, setPlayer] = useState({
    player: "",
    playing: false,
    poker: 0,
    full: 0,
    stair: 0,
    pairOrTrio_1: 0,
    pairOrTrio_2: 0,
    pairOrTrio_3: 0,
    pairOrTrio_4: 0,
    pairOrTrio_5: 0,
    pairOrTrio_6: 0,
  });

  const ptsTotal = () => {

    return (player.poker + 
            player.full + 
            player.stair + 
            player.pairOrTrio_1 + 
            player.pairOrTrio_2 + 
            player.pairOrTrio_3 + 
            player.pairOrTrio_4 + 
            player.pairOrTrio_5 + 
            player.pairOrTrio_6
            )
  }

  const data = { player, setPlayer, ptsTotal};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
