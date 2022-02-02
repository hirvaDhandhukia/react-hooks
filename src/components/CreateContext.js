import React, {createContext} from 'react';

export const TreesContest = createContext();

const trees = [
    {id:"1", type:"Maple"},
    {id:"2", type:"Oak"},
    {id:"3", type:"Family"},
    {id:"4", type:"Component"}
];

function CreateContext() {
  return <div>
      <h1>Trees I've Jeard pf</h1>
  </div>;
}

export default CreateContext;

// que: data fetching with a fetch hook
// que: building fetch component