import React, { useEffect, useRef, useState } from "react";

export default function RefExample() {
  const [count, setVal] = useState(0);
  const render = useRef(0);
  console.log(render);
  const changeCount = () => {
    render.current = render.current + 1;
  };
  useEffect(changeCount);
  return (
    <div>
      <button
        onClick={() => {
          setVal(count + 1);
        }}
      >
        +1
      </button>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setVal(count - 1);
        }}
      >
        -1
      </button>
      <h2>Page Renderring {render.current}</h2>
    </div>
  );
}
