import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import "./ToggleThemeButton.css";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className="slider"></span>
    </label>
  );
}
