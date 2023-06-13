import React, { useState, useEffect } from "react";
import "../css/clock.css";

const Clock24Hr = (props) => {
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
      hour12: false, // Set to false for 24-hour format
    };
    const formattedTime = time.toLocaleTimeString([], options);

    return (
      <div className="Time">
        {formattedTime}
      </div>
    );
  };

  return <div className="finalTime" style={props.fTimeStyle}>{formatTime(time)}</div>;
};

export default Clock24Hr;
