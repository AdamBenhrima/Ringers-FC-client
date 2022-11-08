import PlayerList from "../../Components/PlayerList/PlayerList";
import "./TeamMainPage.scss";

const TeamMainPage = ({ players, handleLevelFilter, handlePositionFilter }) => {
  return (
    <>
      <div className="player-list">
        <h1 className="player-list__title">Player List</h1>
        <div className="player-list__box">
          <div className="player-list__filters">
            <h4>Filter:</h4>
            <div className="player-list__filter-wrapper">
              <select
                className="player-list__filtered-value"
                onChange={(e) => {
                  handlePositionFilter(e.target.value);
                }}
                name="positionPlayed"
                id="position"
              >
                <option value={0}>Position</option>
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Defender">Defender</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Forward">Forward</option>
              </select>
              <select
                className="player-list__filtered-value"
                onChange={(e) => {
                  console.log(e.target.value);
                  handleLevelFilter(e.target.value);
                }}
                name="level"
                id="level"
              >
                <option value={0}>Level</option>
                <option value="Casual">Casual</option>
                <option value="Competitive Amateur">Competitive Amateur</option>
                <option value="Semi-pro">Semi-pro</option>
              </select>
            </div>
          </div>
          <div className="player-list__key">
            <h4 className="player-list__label">Player Name</h4>
            <h4 className="player-list__label">Position</h4>
            <h4 className="player-list__label">Playing Level</h4>
          </div>

          {players.map((player) => {
            return <PlayerList player={player} key={player.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TeamMainPage;
