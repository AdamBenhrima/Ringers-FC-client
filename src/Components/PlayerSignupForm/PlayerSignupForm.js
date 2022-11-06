import Slider from "@mui/material/Slider";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlayerSignupForm.scss";

const PlayerSignupForm = ({ getPlayers }) => {
  const [playerDetails, setPlayerDetails] = useState({
    playerName: "",
    playerEmail: "",
    playerTelephone: "",
    postcode: "",
    level: 2,
    positionPlayed: {
      Goalkeeper: false,
      Defender: false,
      Midfielder: false,
      Forward: false,
    },
  });

  const navigate = useNavigate();

  const marks = [
    {
      value: 1,
      label: "Casual",
    },
    {
      value: 2,
      label: "Competitive Amateur",
    },
    {
      value: 3,
      label: "Semi-pro",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setPlayerDetails({ ...playerDetails, [name]: value });
  };

  const handlePositionChange = (e) => {
    const { value, checked } = e.target;

    setPlayerDetails({
      ...playerDetails,
      positionPlayed: { ...playerDetails.positionPlayed, [value]: checked },
    });
  };
  const addPlayer = async () => {
    const { data } = await axios
      .post("http://localhost:8080/players", playerDetails)
      .catch((error) => {
        alert(error.response.statusText);
        console.log(error.response);
      });
    getPlayers();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addPlayer();
    navigate("/player-home");
  };
  return (
    <form
      className="player-form"
      name="playerForm"
      id="playerForm"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input
        className="form-input"
        type="text"
        placeholder="Player Name"
        name="playerName"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Email"
        name="playerEmail"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      {/* <input
        className="form-input"
        type="text"
        placeholder="Password"
        name="password"
      /> */}
      <input
        className="form-input"
        type="text"
        placeholder="Mobile number"
        name="playerTelephone"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Postcode"
        name="postcode"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <label htmlFor="slider" className="signup-slider">
        Playing Level
        <Slider
          aria-label="Custom marks"
          defaultValue={2}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="off"
          marks={marks}
          min={1}
          max={3}
          form="playerForm"
          name="slider"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </label>
      <fieldset className="form-input">
        <legend>Positions Played</legend>
        <div>
          <input
            type="checkbox"
            id="goalkeeper"
            name="positions"
            value="Goalkeeper"
            onChange={(e) => {
              handlePositionChange(e);
            }}
          />
          <label htmlFor="goalkeeper">Goalkeeper</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="defender"
            name="positions"
            value="Defender"
            onChange={(e) => {
              handlePositionChange(e);
            }}
          />
          <label htmlFor="defender">Defender</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="midfielder"
            name="positions"
            value="Midfielder"
            onChange={(e) => {
              handlePositionChange(e);
            }}
          />
          <label htmlFor="midfielder">Midfielder</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="forward"
            name="positions"
            value="Forward"
            onChange={(e) => {
              handlePositionChange(e);
            }}
          />
          <label htmlFor="forward">Forward</label>
        </div>
      </fieldset>
      <button type="submit" className="nav__button signup-button">
        Register
      </button>
    </form>
  );
};

export default PlayerSignupForm;
