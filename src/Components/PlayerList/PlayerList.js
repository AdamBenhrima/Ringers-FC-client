import React from "react";
import { Link } from "react-router-dom";

const PlayerList = ({ player }) => {
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
    <Link
      renderPositions={renderPositions}
      to={`/team-home/player-profile/${player.id}`}
      className="player-list__values"
    >
      <p className="player-list__value">{player.playerName}</p>
      <p className="player-list__value">{renderPositions()}</p>
      <p className="player-list__value">{player.level}</p>
    </Link>
  );
};

export default PlayerList;
