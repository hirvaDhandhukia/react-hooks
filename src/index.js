import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <TreesContext.Provider value={trees}>
    <App />
  </TreesContext.Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
