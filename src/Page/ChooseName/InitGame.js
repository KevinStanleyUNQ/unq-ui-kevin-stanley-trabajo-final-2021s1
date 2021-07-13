import React, { useState, useContext } from "react";
import "../ChooseName/initGame.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../Context/userContext";
import generala from "../../assets/img/generalaHome.png";

const InitGame = () => {
  const history = useHistory();

  const [userNickName, setUserNickName] = useState({
    nickname: "",
  });

  const { setPlayer } = useContext(UserContext);

  const [alert, setAlert] = useState(false);

  const handleNickName = (event) => {
    setUserNickName({
      ...userNickName,
      [event.target.name]: event.target.value,
    });
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const startGame = (event) => {
    event.preventDefault();

    const nickName = userNickName.nickname;

    const isValid = nickName.trim();

    if (!isValid) {
      showAlert();
    } else {
      setPlayer({
        player: nickName,
        playing: true,
      });
      history.push("/play");
    }
  };

  return (
    <main className="main-containter">
      <div className="title">
        <h1 className="game-title">
         Game
        </h1>
      </div>
      <div className="img-Home">
        <img src={generala} alt="generala" />
      </div>
      <div className="card-new-player">
        <label className="title-player">Player Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese un Nombre"
          name="nickname"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={handleNickName}
          value={userNickName.nickname}
        />
        {alert && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <div className="text-alert">Please enter a valid name</div>
          </div>
        )}
        <button
          type="button"
          className="btn-play"
          onClick={(event) => startGame(event)}
        >
          ¡Play Now!
        </button>
      </div>
    </main>
  );
};

export default InitGame;
