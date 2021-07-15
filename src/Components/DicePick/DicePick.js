import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleChooseIcon } from "../../utils/functions";
import "../DicePick/dicePick.css";

const DicePick = (props) => {

    const { value, dice } = props

    return (
        <div 
        key={dice + 2}
        className="single-dice"
        id={"dicePick-"+ dice} 
        data-dice={value}
      >
        <FontAwesomeIcon id="icon-dice" icon={handleChooseIcon(value)} key={dice}/> {/** Preguntar por que no me toma el icono correcto, por que no me da el Path correcto
         *  cuando en el archivo Dice.js esta implementado de la misma manera y si me lo toma de manera correcta.
        */}
        </div>
    )
}

export default DicePick
