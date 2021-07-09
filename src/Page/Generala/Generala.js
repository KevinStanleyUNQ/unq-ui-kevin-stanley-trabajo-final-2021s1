import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from "../../Context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import PointsTable from "../../Components/Table/PointsTable"
import "../Generala/generala.css"
import Dices from "../../Components/Dices/Dices"

const Generala = () => {

    const { player, setPlayer } = useContext(UserContext)
   
    

    const history = useHistory()

    if (!player.playing) {
        setPlayer({
            playing: false
        })
        history.push("/")
    }

    

    return (
        <main>
        <div className="jugador-activo">
            <h1>Soy el Jugador: {player.player}</h1>
        </div>
        <div className="table">
        <PointsTable player={player.player} />
        </div>
        <Dices />
        </main>
        )
}


export default Generala;