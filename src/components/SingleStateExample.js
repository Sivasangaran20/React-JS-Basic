import React, { useState } from "react";

export default function SingleStateExample() {
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Green");
  };
  return (
    <div>
      <h2>
        Change the color <i style={{ color: `${color}` }}>{color}</i> when you
        click!!!
      </h2>
      <button onClick={changeColor}>color</button>
    </div>
  );
}
