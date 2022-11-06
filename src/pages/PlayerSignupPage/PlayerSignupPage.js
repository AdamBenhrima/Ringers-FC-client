import React from "react";
import PlayerSignupForm from "../../Components/PlayerSignupForm/PlayerSignupForm";

const PlayerSignupPage = ({ getPlayers }) => {
  return (
    <>
      <div className="team-banner">
        <h1 className="team-banner__text">Player Signup Form</h1>
      </div>
      <PlayerSignupForm getPlayers={getPlayers} />
    </>
  );
};

export default PlayerSignupPage;
