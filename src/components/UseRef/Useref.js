// useRef is going to allow us to reach out to a component and determine its value.
// particularly can come in handy with forms
// we can use this to capture any input (to store or manipulate with the inputed data)

import React, {useRef} from 'react';

function Useref() {
    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`${soundVal} sounds like ${colorVal}`);

        sound.current.value="";
        color.current.value="";
    }

  return <form onSubmit={submit}>
      <input
        type="text"
        placeholder='Sound...'
        ref={sound}
      />
      <input
        type="color"
        ref={color}
      />
      <button>ADD</button>
  </form>;
}

export default Useref;
