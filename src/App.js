// import logo from './logo.svg';
import React, { useState } from 'react';
import Room from './Room';
import './App.css';
import ValueContext from './ValueContext';

function App() {
  let Value = useState(20);
  return (
    <ValueContext.Provider value = {Value}>
      <div className="App">
        <Room></Room>
      </div>
    </ValueContext.Provider>
  );
}


export default App;
