import React from "react";

function CallbackExample(props) {
  console.log("Rendered", props);
  return <></>;
}

export default React.memo(CallbackExample);
