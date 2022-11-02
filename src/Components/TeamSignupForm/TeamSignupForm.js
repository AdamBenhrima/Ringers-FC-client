import React from "react";
import Slider from "@mui/material/Slider";
import "./TeamSignupForm.scss";

const TeamSignupForm = () => {
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
  return (
    <form className="team-form" name="teamForm" id="teamForm">
      <input
        className="form-input"
        type="text"
        placeholder="Team Name"
        name="teamName"
      />
      <input
        className="form-input"
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        className="form-input"
        type="text"
        placeholder="Password"
        name="password"
      />
      <input
        className="form-input"
        type="text"
        placeholder="Mobile number"
        name="mobile"
      />
      <input
        className="form-input"
        type="text"
        placeholder="Postcode"
        name="postcode"
      />
      <label htmlFor="slider">
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
          name="slider"
        />
      </label>
    </form>
  );
};

export default TeamSignupForm;
