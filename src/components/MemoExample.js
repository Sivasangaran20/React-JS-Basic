import React, { useState, useMemo } from "react";

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [number, getCube] = useState(0);
  const cubeFun = (number) => {
    console.log("Response");

    return Math.pow(number, 3);
  };

  const result = useMemo(() => cubeFun(number), [number]);

  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <input type="number" onChange={(e) => getCube(e.target.value)}></input>
      <h2>Cube Value: {result}</h2>
      <button onClick={changeCount}>increase</button>
      <h2>Count: {count}</h2>
    </div>
  );
}
