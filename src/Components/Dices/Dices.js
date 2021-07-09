import React, { useState } from 'react'

const Dices = () => {

    const [randomNumber, setRandomNumber] = useState();

    const handleRandomNumber = () => {
        const rand = Math.floor(Math.random() * 6 + 1)
        setRandomNumber(rand);

    }


    return (
        <div>
        <button onClick={handleRandomNumber}>Click</button>
        <div>The number is: {randomNumber}</div>
      </div>
    )
}

export default Dices;