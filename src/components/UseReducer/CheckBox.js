import React, {useReducer} from 'react';

function CheckBox() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return <div>
    <input
      type="checkbox"
      value={checked}
      onChange={toggle}
    />
    {checked ? "checked" : "not checked"}
  </div>;
}

export default CheckBox;

//que: define a list of actions and then dispatch them in the component