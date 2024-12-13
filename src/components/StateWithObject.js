import React, { useState } from "react";

export default function StateWithObject() {
  const [car, setCar] = useState({
    color: "Red",
    model: "BMW",
    published: 2024,
  });
  const changeCarColor = () => {
    setCar((prevStateVal) => {
      return { ...prevStateVal, color: "Green" };
    });
  };
  return (
    <div>
      <h2>
        Change the Car color{" "}
        <i style={{ color: `${car.color}` }}>{car.color}</i> when you click!!!
        and the Model is <i style={{ color: `${car.color}` }}>{car.model}</i>{" "}
        and published on{" "}
        <i style={{ color: `${car.color}` }}>{car.published}</i>
      </h2>
      <button onClick={changeCarColor}>color</button>
    </div>
  );
}
