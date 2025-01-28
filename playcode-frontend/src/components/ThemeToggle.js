import React from "react";
import "../App.css";
const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}>
      Switch to {theme === "vs-dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
