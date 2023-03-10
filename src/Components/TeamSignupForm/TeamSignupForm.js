import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import "./TeamSignupForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeamSignupForm = ({ getTeams }) => {
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    teamEmail: "",
    teamTelephone: "",
    postcode: "",
    level: 2,
    positionNeeded: {
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
    setTeamDetails({ ...teamDetails, [name]: value });
  };

  const handlePositionChange = (e) => {
    const { value, checked } = e.target;

    setTeamDetails({
      ...teamDetails,
      positionNeeded: { ...teamDetails.positionNeeded, [value]: checked },
    });
  };

  const addTeam = async () => {
    const { data } = await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/teams`, teamDetails)
      .catch((error) => {
        alert(error.response.statusText);
        console.log(error.response);
      });
    getTeams();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTeam();
    navigate("/team-home");
  };
  return (
    <form
      className="team-form"
      name="teamForm"
      id="teamForm"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input
        className="form-input"
        type="text"
        placeholder="Team Name"
        name="teamName"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Email"
        name="teamEmail"
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
        name="teamTelephone"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Postcode"
        name="postcode"
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="level" className="signup-slider">
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
          form="teamForm"
          name="level"
          onChange={(e) => handleInputChange(e)}
        />
      </label>
      <fieldset className="form-input">
        <legend>Positions Needed</legend>
        <div>
          <input
            type="checkbox"
            id="goalkeeper"
            name="positions"
            value="Goalkeeper"
            onChange={(e) => handlePositionChange(e)}
          />
          <label htmlFor="goalkeeper">Goalkeeper</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="defender"
            name="positions"
            value="Defender"
            onChange={(e) => handlePositionChange(e)}
          />
          <label htmlFor="defender">Defender</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="midfielder"
            name="positions"
            value="Midfielder"
            onChange={(e) => handlePositionChange(e)}
          />
          <label htmlFor="midfielder">Midfielder</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="forward"
            name="positions"
            value="Forward"
            onChange={(e) => handlePositionChange(e)}
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

export default TeamSignupForm;
