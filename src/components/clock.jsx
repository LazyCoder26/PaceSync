import React, { useState, useEffect } from "react";
import "../css/clock.css";

// Function to format time in 12-hour format
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes;
  return strTime;
}

const Clock = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const ampmTime = formatAMPM(time); // Use the provided formatAMPM function
    const ampm = time.getHours() >= 12 ? "PM" : "AM"; // Extract the custom AM/PM indicator

    const seconds = time.getSeconds().toString().padStart(2, '0'); // Get the seconds and pad with leading zeros if necessary

    return (
      <div className="Time">
        <span className="formatTime" style={props.ampmStyle}>{ampm}</span>
        {ampmTime}:{seconds}
      </div>
    );
  };

  return <div className="finalTime" style={props.fTimeStyle}>{formatTime(time)}</div>;
};

export default Clock;
