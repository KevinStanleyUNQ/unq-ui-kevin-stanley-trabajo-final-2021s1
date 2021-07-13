import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from "../../Context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import PointsTable from "../../Components/Table/PointsTable"
import "../Generala/generala.css"
import Dices from "../../Components/Dices/Dices";
import DicesPick from '../../Components/DicesPick/DicesPick';

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
        {/* <div className="dices-pick">
            <h1 className="text-pick-dice">Dados seleccionados:</h1>
        <DicesPick />
        </div> */}
        <Dices />
        </main>
        )
}


export default Generala;