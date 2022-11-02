import footballBackground from "../../assets/video/football-background.mp4";
import "../Hero/Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__video-wrapper">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          src={footballBackground}
        ></video>
        <h1 className="hero__title">FOOTBALL</h1>
      </div>
      <div className="hero__mission">
        <h3 className="hero__mission-text">
          Last minute dropout? Barely scraping an 11 together for a wet and
          windy match on Clapham Common? Ringers FC can help! Whether it's a
          silky midfielder, or a cat inbetween the sticks, Ringers FC can
          provide you with the platform to connect with players all over London!
        </h3>
      </div>
    </div>
  );
};

export default Hero;
