import TeamList from "../../Components/TeamList/TeamList";
import "./PlayerMainPage.scss";

const PlayerMainPage = ({ teams, handleLevelFilter, handlePositionFilter }) => {
  return (
    <>
      <div className="team-list">
        <h1 className="team-list__title">Team List</h1>
        <div className="team-list__box">
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
          <div className="team-list__key">
            <h4 className="team-list__label">Team Name</h4>
            <h4 className="team-list__label">Position</h4>
            <h4 className="team-list__label">Playing Level</h4>
          </div>
          {teams.map((team) => {
            return <TeamList team={team} key={team.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PlayerMainPage;
