import "./App.css";
// import MemoExample from "./components/MemoExample";
// import RefAccessDom from "./components/RefAccessDom";
// import RefExample from "./components/RefExample";
// import EffectExample from "./components/EffectExample";
// import StateCountChangeExample from "./components/StateCountChangeExample";
// import SingleStateExample from "./components/SingleStateExample";
// import StateWithObject from "./components/StateWithObject";
import React, { useCallback, useState } from "react";
import CallbackExample from "./components/CallbackExample";

function App() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  const newFn = useCallback(() => {}, []);
  return (
    <div className="App">
      {/* <SingleStateExample /> */}
      {/* <StateWithObject />
      <StateCountChangeExample /> */}
      {/* <EffectExample /> */}
      {/* <RefExample /> */}
      {/* <RefAccessDom /> */}
      {/* <MemoExample /> */}
      <CallbackExample newFn={newFn} />
      <button onClick={changeCount}>increase</button>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default App;
