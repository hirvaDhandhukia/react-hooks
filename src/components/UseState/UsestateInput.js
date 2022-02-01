import React, { useState } from "react";

function UsestateInput() {
  const [checked, setChecked] = useState();

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default UsestateInput;
