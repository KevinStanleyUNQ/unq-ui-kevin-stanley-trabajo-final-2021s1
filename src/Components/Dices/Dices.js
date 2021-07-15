import React, { useContext, useEffect } from "react";
import DicesContext from "../../Context/dicesContext";
import UserContext from "../../Context/userContext";
import "../Dices/dices.css";
import Dice from "../Dice/Dice";
const Dices = () => {
  const {
    setHeldDices,
    saveDices,
    setSaveDices,
    heldDices,
    setDicesOnTable,
    dicesOnTable,
  } = useContext(DicesContext);

  const { setPlayer, player } = useContext(UserContext)

  useEffect(() => {}, [saveDices, dicesOnTable]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDicesGenerate = () => {
    const dicesGenerate = [0, 0, 0, 0, 0].map((dice) =>
      Math.floor(Math.random() * 6 + 1)
    );
    setDicesOnTable(dicesGenerate);
    let dicesRepeats = handleDicesRepeat(dicesGenerate);
    let dicesWithoutRepeat = handleRemoveDuplicates(dicesRepeats, "number");
    handleVerifyPlays(dicesWithoutRepeat);
    // setSaveDices([])
  };

  const handleDicesRepeat = (dices) => {
    const listOfDices = dices;
    const appearence = listOfDices.filter((number, i) =>
      i === 0 ? true : listOfDices[i - 1] !== number
    );
    const counterAppearence = appearence.map((spec) => {
      return { number: spec, count: 0 };
    });

    counterAppearence.map((countSpec, i) => {
      const actualSpecLength = listOfDices.filter(
        (number) => number === countSpec.number
      ).length;
      countSpec.count = actualSpecLength;
      return counterAppearence;
    });

    return counterAppearence;

  };

  const handleRemoveDuplicates = (originalArray, prop) => {
    let newArray = [];
    let lookupObject  = {};

    for(let i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}


  const handleVerifyPlays = (arrayDicesAndAppearences) => {
    
    let listAppearencesOfDices = arrayDicesAndAppearences.map((e) => e.count);
    let maxAppearences = Math.max(...listAppearencesOfDices)

    let dicesWithMoreAppearences = arrayDicesAndAppearences.filter((e) => e.count === maxAppearences)

      

      let dices = dicesWithMoreAppearences[0]
      console.log(dicesWithMoreAppearences)

        switch (dices.count) {
          case 1: 
          console.log(arrayDicesAndAppearences)
            return stair(dicesWithMoreAppearences)
          case 2:
            // pairOrTrio(dices, dicesWithMoreAppearences)
            console.log(arrayDicesAndAppearences)
            return console.log("Debo verificar si es Par o Trio o Full")
          case 3:
            console.log(arrayDicesAndAppearences)
            return full(arrayDicesAndAppearences)

          case 4:
            console.log(arrayDicesAndAppearences)
            return poker()
          default: 
            return console.log("No cumplo con ninguna jugada")
        }
  }

  const pairOrTrio = (dices, dicesWithMoreAppearences) => {

    if(dices.length > 1 && dices.length < 5 ){
      let listNumbers = dicesWithMoreAppearences.map((e) => e.number)
      let listTimesNumber = dicesWithMoreAppearences.map((e) => e.count)
      // setPoints()


    }

  }

  const full = (dices) => {
    if(dices.length === 2){
      let firstDice = dices[0].count;
      let secondDice = dices[1].count;
      if(firstDice === 3 || secondDice === 3){
        let sumFull = player.full + 30
        setPlayer({...player, full:sumFull})
      }
    }  
  }

  const poker = () => {
    let sumPoker = player.poker + 40
    setPlayer({...player, poker:sumPoker})
  }

  const stair = (dices) => {

    let possibleStair_1 = [1,2,3,4,5];
    let possibleStair_2 = [2,3,4,5,6];

    let numbersDices = dices.map((e) => e.number)
    let numerDiceOrdered = numbersDices.sort()

    if(isEqualArray(numerDiceOrdered, possibleStair_1) || 
       isEqualArray(numerDiceOrdered, possibleStair_2))
    {
      let sumStair = player.stair + 20
      setPlayer({...player, stair:sumStair})
    }
  }

  const isEqualArray = (array1,array2) => {
    let i = array1.length;
   if (i !== array2.length) return false;
   while (i--) {
     if (array1[i] !== array2[i]) return false;
   }
   return true;
 };


  const handleDices = () => {
    const newListDices = dicesOnTable.map((dice, index) => (
      <Dice value={dice} key={index} dice={index} />
    ));
    return newListDices;
  };

  return (
    <div className="roll-dice">
      <div className="dices-container">{handleDices()}</div>
      <button className="btn-roll-dices" onClick={handleDicesGenerate}>
        Click
      </button>
    </div>
  );
};

export default Dices;
