import "./Footer.scss";
import facebook from "../../assets/icons/Icon-facebook.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";
import football from "../../assets/icons/football-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="https://www.instagram.com/">
          <img
            src={instagram}
            alt="instagram logo"
            className="footer__social"
          />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook logo" className="footer__social" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="twitter logo" className="footer__social" />
        </a>
      </div>
      <div className="footer__container">
        <img src={football} alt="" className="footer__icon" />
        <a href="/" className="footer__logo">
          RINGERS FC
        </a>
      </div>
    </footer>
  );
};

export default Footer;
