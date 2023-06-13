import React, { useState } from "react";
import "./css/App.css";
import "./css/index.css";
import Light from "./themes/Light";
import Dark from "./themes/Dark";
import { Switch } from "@nextui-org/react";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div id="App">
      <div className="switch">
        <Switch animated checked={isDarkTheme} onChange={handleThemeToggle} />
      </div>
      <div className="time">
        {isDarkTheme ? <Dark /> : <Light />}
      </div>
    </div>
  );
};

export default App;
