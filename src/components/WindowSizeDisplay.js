// File: src/components/WindowSizeDisplay.js
import React from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function WindowSizeDisplay() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
