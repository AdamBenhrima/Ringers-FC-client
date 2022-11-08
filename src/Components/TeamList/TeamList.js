import React from "react";
import { Link } from "react-router-dom";

const TeamList = ({ team }) => {
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
    <Link
      to={`/player-home/team-profile/${team.id}`}
      className="team-list__values"
    >
      <p className="team-list__value">{team.teamName}</p>
      <div className="team-list__value">{renderPositions()}</div>
      <p className="team-list__value">{team.level}</p>
    </Link>
  );
};

export default TeamList;
