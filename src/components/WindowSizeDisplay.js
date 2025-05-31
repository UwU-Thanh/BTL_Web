import React from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function WindowSizeDisplay() {
  const { width, height } = useWindowSize();
  return <p>📏 Viewport: {width} x {height}</p>;
}
