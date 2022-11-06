import "./TeamSignupPage.scss";
import TeamSignupForm from "../../Components/TeamSignupForm/TeamSignupForm";

const TeamSignupPage = ({ getTeams }) => {
  return (
    <>
      <div className="team-banner">
        <h1 className="team-banner__text">Team Signup Form</h1>
      </div>
      <TeamSignupForm getTeams={getTeams} />
    </>
  );
};

export default TeamSignupPage;
