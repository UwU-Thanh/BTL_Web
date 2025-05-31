import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ToggleThemeButton from "./components/ToggleThemeButton";
import WindowSizeDisplay from "./components/WindowSizeDisplay";
import "./App.css"
import "./index.css"
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <h1>Theme Switcher & Custom Hook Demo</h1>
        <ToggleThemeButton />
        <WindowSizeDisplay />
      </div>
    </ThemeProvider>
  );
}

export default App;
