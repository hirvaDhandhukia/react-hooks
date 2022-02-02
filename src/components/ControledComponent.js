import React, {useState} from 'react';

function ControledComponent() {
    const [sound, setSound] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color}`);
        
        setSound("");
        setSound("#000000");

    }

  return <form onSubmit={submit}>
      <input
        type="text"
        placeholder='Sound...'
        value={sound}
        onChange={(e) => setSound(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button>ADD</button>
  </form>;
}

export default ControledComponent;
