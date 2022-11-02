import "./Header.scss";
import profile from "../../assets/icons/profile-icon.svg";
import inbox from "../../assets/icons/inbox-icon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={inbox} alt="" className="header__inbox" />
        <a href="/" className="header__logo">
          Ringers FC
        </a>
        <img src={profile} alt="" className="header__profile" />
      </div>
      <nav className="nav">
        <a href="/team-signup-page" className="nav__button">
          Teams
        </a>
        <a href="/player-signup-page" className="nav__button">
          Players
        </a>
      </nav>
    </header>
  );
};

export default Header;
