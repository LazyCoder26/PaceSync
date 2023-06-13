import React from "react";
import Clock from "../components/clock";

const Light = () => {
  return (
    <div className="main-light">
      <p className="title">
        <span className="title1" style={{color: "Black"}}>Pace</span>
        <span className="title2" style={{color: "Black"}}>Sync</span>
      </p>
      <Clock fTimeStyle={{ color: "Black" }} ampmStyle={{ color: "Black" }} />
    </div>
  );
};

export default Light;
