import TeamList from "../../Components/TeamList/TeamList";
import "./PlayerMainPage.scss";

const PlayerMainPage = ({ teams }) => {
  return (
    <>
      <div className="team-list">
        <h1 className="team-list__title">Team List</h1>
        <div className="team-list__box">
          <div className="team-list__key">
            <h4 className="team-list__label">Team Name</h4>
            <h4 className="team-list__label">Positions Needed</h4>
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
