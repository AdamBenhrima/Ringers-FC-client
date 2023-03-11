import "./Footer.scss";
import facebook from "../../assets/icons/Icon-facebook.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";
import football from "../../assets/icons/football-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src={instagram}
            alt="instagram logo"
            className="footer__social"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook logo" className="footer__social" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="twitter logo" className="footer__social" />
        </a>
      </div>
      <div className="footer__container">
        <img src={football} alt="" className="footer__icon" />
        <Link to="/" className="footer__logo">
          RINGERS FC
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
