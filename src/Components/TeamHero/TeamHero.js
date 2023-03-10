import { Link } from "react-router-dom";
import "./TeamHero.scss";

const TeamHero = () => {
  return (
    <div className="signup__space">
      <h3 className="signup__title">Find a Ringer!</h3>
      <div className="team-hero">
        <Link to="/team-signup-page" className="team-hero__button">
          Team Signup
        </Link>
      </div>
    </div>
  );
};

export default TeamHero;
