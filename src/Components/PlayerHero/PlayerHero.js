import "./PlayerHero.scss";

const PlayerHero = () => {
  return (
    <div className="signup__space">
      <h3 className="signup__title">Become a Ringer!</h3>
      <div className="player-hero">
        <a href="/player-signup-page" className="player-hero__button">
          Player Signup
        </a>
      </div>
    </div>
  );
};

export default PlayerHero;
