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


  const setPoints = (numberDice, times) => {

    switch(numberDice){

      case 1:
          let sumPair_1 = player.pairOrTrio_1 + (numberDice * times)
          return setPlayer({...player, pairOrTrio_1:sumPair_1})
      case 2:
          let sumPair_2 = player.pairOrTrio_2 + (numberDice * times)
          return setPlayer({...player, pairOrTrio_2:sumPair_2})
      case 3:
          let sumPair_3 = player.pairOrTrio_3 + (numberDice * times)
          return setPlayer({...player, pairOrTrio_3:sumPair_3})
      case 4:
          let sumPair_4 = player.pairOrTrio_4 + (numberDice * times)
          return setPlayer({...player, pairOrTrio_4:sumPair_4})
      case 5:
          let sumPair_5 = player.pairOrTrio_5 + (numberDice * times)
          return setPlayer({...player, pairOrTrio_5:sumPair_5})
      default:
          let sumPair_6 = player.pairOrTrio_6 + (numberDice * times)
          return setPlayer({...player, pairOrTrio_6:sumPair_6})
    }



  }

  const data = { player, setPlayer, ptsTotal, setPoints};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
