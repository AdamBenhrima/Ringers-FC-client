import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import "./PlayerProfile.scss";

const PlayerProfile = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);

  const getPlayer = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/players/${playerId}`
    );
    setPlayer(data);
  };

  useEffect(() => {
    getPlayer();
  }, []);

  if (!player) {
    return <h1>Loading...</h1>;
  }

  const keys = Object.keys(player.positionPlayed);
  const value = Object.values(player.positionPlayed);

  const renderPositions = () => {
    return value.map((value, i) => {
      if (value) {
        return <p>{keys[i]}</p>;
      }
    });
  };

  return (
    <>
      <div className="player-profile__header">
        <img
          className="player-profile__arrow"
          src={arrow}
          onClick={() => navigate(-1)}
        />
        <h2 className="player-profile__title">Player Profile</h2>
      </div>
      <div className="player-profile">
        <h3 className="player-profile__name">{player.playerName}</h3>
        <div className="player-profile__labels">
          <p>Positions Played</p>
          <p>Playing Level</p>
        </div>
        <div className="player-profile__value">
          <p>{renderPositions()}</p>
          <p>{player.level}</p>
        </div>
        <div className="player-profile__labels">
          <p>Postcode</p>
          <p>Telephone</p>
        </div>
        <div className="player-profile__value">
          <p>{player.postcode}</p>
          <p>{player.playerTelephone}</p>
        </div>
        <a
          href={`mailto:${player.playerEmail}`}
          className="nav__button signup-button"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default PlayerProfile;
