import React, { useContext, useState } from "react";
import UserContext from "../../Context/userContext";
import Dice from "../Dice/Dice";

const DicesPick = () => {
    
  const [playerPickDice, setPickDice] = useState(false);
  const { heldDice } = useContext(UserContext);

  const listDicesPick = () => {
    const orderPickDice = heldDice
      .sort()
      .map((pickDice, index) => (
        <Dice value={pickDice} key={index} dice={index} />
      ));
    setPickDice(true);
    console.log(orderPickDice)
    return orderPickDice;
  };

  return (
//   <div className="dices-pick">
//       { playerPickDice && (
//           listDicesPick
//       )
//      }
//       </div>
        <div className="dices-pick">
            {listDicesPick}
        </div>
    )
};

export default DicesPick;
