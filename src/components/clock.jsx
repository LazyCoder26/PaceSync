import React, { useState, useEffect } from "react";
import "../css/clock.css";

const Clock = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    const formattedTime = time.toLocaleTimeString([], options);
    const ampm = time.getHours() >= 12 ? "PM" : "AM";

    return (
      <div className="Time">
        <span className="formatTime" style={props.ampmStyle}>{ampm}</span>
        {formattedTime}
      </div>
    );
  };

  return <div className="finalTime" style={props.fTimeStyle}>{formatTime(time)}</div>;
};

export default Clock;

