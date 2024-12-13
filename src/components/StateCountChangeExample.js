import React, { useState } from "react";

export default function StateCountChangeExample() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={changeCount}>increase</button>
    </div>
  );
}
