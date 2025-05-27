// File: src/components/ToggleThemeButton.js
import React from "react";
import { useThemeContext } from "../context/ThemeContext";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
