import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function handleClick() {
  const newColor = getRandomColor();
  onChangeColor(newColor);
}


function Child({ onChangeColor, color }) {
 console.log(onChangeColor)

  return <div onClick={handleClick} 
  className="child"
  onClick={onChangeColor}
  style={{ backgroundColor: color }} />;
}

export default Child;
