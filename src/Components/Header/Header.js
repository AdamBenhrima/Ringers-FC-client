import "./Header.scss";
import profile from "../../assets/icons/profile-icon.svg";
import inbox from "../../assets/icons/inbox-icon.svg";
import football from "../../assets/icons/football-icon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={football} alt="" className="header__icon" />
        <Link to="/" className="header__logo">
          RINGERS FC
        </Link>
        {/* <img src={profile} alt="" className="header__profile" /> */}
      </div>
      <nav className="nav">
        <Link to="/player-home" className="nav__button">
          Teams
        </Link>
        <Link to="/team-home" className="nav__button">
          Players
        </Link>
      </nav>
    </header>
  );
};

export default Header;
