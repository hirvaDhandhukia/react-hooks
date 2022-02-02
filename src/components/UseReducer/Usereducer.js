// useReducer returns 2 arguments, 1st argument is a function and the 2nd is the initial value
// the function returns some sort of new state

import React, {useReducer} from 'react';

function Usereducer() {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber , 
    0);

  return <h1 onClick={()=> setNumber(1)}>{number}</h1>;
}

export default Usereducer;
