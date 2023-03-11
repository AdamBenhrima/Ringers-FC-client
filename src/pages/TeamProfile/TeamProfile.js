import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import "./TeamProfile.scss";

const TeamProfile = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = useState(null);

  const getTeam = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/teams/${teamId}`
    );
    setTeam(data);
  };

  useEffect(() => {
    getTeam();
  }, []);

  if (!team) {
    return <h1>Loading...</h1>;
  }

  const keys = Object.keys(team.positionNeeded);
  const value = Object.values(team.positionNeeded);

  const renderPositions = () => {
    return value.map((value, i) => {
      if (value) {
        return <p>{keys[i]}</p>;
      }
    });
  };

  return (
    <>
      <div className="team-profile__header">
        <img
          className="team-profile__arrow"
          src={arrow}
          onClick={() => navigate(-1)}
        />
        <h2 className="team-profile__title">Team Profile</h2>
      </div>
      <div className="team-profile">
        <h3 className="team-profile__name">{team.teamName}</h3>
        <div className="player-profile__labels">
          <p>Positions Required</p>
          <p>Playing Level</p>
        </div>
        <div className="team-profile__value">
          <p>{renderPositions()}</p>
          <p>{team.level}</p>
        </div>
        <div className="player-profile__labels">
          <p>Postcode</p>
          <p>Telephone</p>
        </div>
        <div className="team-profile__value">
          <p>{team.postcode}</p>
          <p>{team.teamTelephone}</p>
        </div>
        <a
          href={`mailto:${team.teamEmail}`}
          className="nav__button signup-button"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default TeamProfile;
