import React, { useState } from "react";
import "./css/App.css";
import "./css/index.css";
import Light from "./themes/Light";
import Dark from "./themes/Dark";
import { Switch } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics"

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "App-dark" : "App-light"}>
      <div className="switch">
        <Switch animated checked={isDarkTheme} onChange={handleThemeToggle} />
      </div>
      <div className="time">
        {isDarkTheme ? <Dark /> : <Light />}
      </div>
      <Analytics />
    </div>
  );
};

export default App;
