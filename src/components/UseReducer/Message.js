// whenever our useState becomes more complex, we can use the useReducer hook instead!
import React, {useReducer} from 'react';

const initialState = {
    message: "hi"
};
// a reducer takes in state & an action and returns a new state
// So the way that I can define which state it should return is with this switch statement. So the switch statement is going to take a look at whatever the type of the action is. This means that we can define the list of the possible actions that we could dispatch. So just think of an action as being like some sort of an event
function reducer(state, action) {
    switch(action.type) {
        // the `` is called a template statement
        case "yell": return {
            message: `HEY! I JUST SAID ${state.message}`
        }
        case "whisper": return {
            message: `excuse me, previous text was ${state.message}`
        }
    }
}

function Message() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

  return <div>
      <p>Message: {state.message}</p>
      <button onClick={()=> dispatch({type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
  </div>;
}

export default Message;
