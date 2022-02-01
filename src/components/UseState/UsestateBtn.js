import React, { useState } from "react";

function UsestateBtn() {
  const [status, setStatus] = useState("Not Delivered");
  // console.log(status);

  return (
    <div>
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}
export default UsestateBtn;
