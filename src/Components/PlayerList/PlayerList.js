import React from "react";

const PlayerList = ({ player }) => {
  return (
    <div className="player-list__values">
      <p className="player-list__value">{player.playerName}</p>
      <p className="player-list__value">{player.position}</p>
      <p className="player-list__value">{player.level}</p>
    </div>
  );
};

export default PlayerList;
