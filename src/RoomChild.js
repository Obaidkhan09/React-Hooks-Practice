import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function RoomChild() {
  let Value = useContext(ValueContext);
  let IncrVal = Value[1];
  return (
    <div>
        Value is : {Value} <br/>
        <button onClick= {()=> {IncrVal(++Value[0])}}>useState Increment</button>
    </div>
  );
}


export default RoomChild;
