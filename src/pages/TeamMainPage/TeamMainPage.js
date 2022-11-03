import PlayerList from "../../Components/PlayerList/PlayerList";
import "./TeamMainPage.scss";

const TeamMainPage = ({ players }) => {
  return (
    <>
      <div className="player-list">
        <h1 className="player-list__title">Player List</h1>
        <div className="player-list__key">
          <h4 className="player-list__label">Player Name</h4>
          <h4 className="player-list__label">Position</h4>
          <h4 className="player-list__label">Playing Level</h4>
        </div>
        {players.map((player) => {
          return <PlayerList player={player} key={player.id} />;
        })}
      </div>
    </>
  );
};

export default TeamMainPage;
