import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Navigation = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt pa3"
        style={{
          height: "150px",
          width: "150px",
        }}
      >
        <div className="wrapperLogo">
          <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Navigation;
