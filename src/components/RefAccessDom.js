import React, { useRef } from "react";

export default function RefAccessDom() {
  const render = useRef();

  const btnClick = () => {
    console.log(render.current.value);
  };

  return (
    <div>
      <input type="text" ref={render}></input>
      <button onClick={btnClick}>Check</button>
    </div>
  );
}
