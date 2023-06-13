import React from "react";
import "./css/App.css";
import "./css/index.css";
import Clock from "./components/clock";

const App = () => {
  return (
    <div id="App">
      <p className="title">
        <span className="title1">Pace</span>
        <span className="title2">Sync</span>
      </p>
      <div className="time">
        <Clock />
      </div>
    </div>
  );
};

export default App;
