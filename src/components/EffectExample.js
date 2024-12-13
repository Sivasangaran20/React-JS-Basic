import React, { useEffect, useState } from "react";

export default function EffectExample() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };
  useEffect(changeCount);
  return (
    <div>
      <h2>Count: {count}</h2>
      {/* <button onClick={changeCount}>increase</button> */}
    </div>
  );
}
