import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import ValueReducer from './ValueReducer';

function RoomChild() {
  let Value = useContext(ValueContext);
  let [state, dispatch ] = useReducer(ValueReducer, 10);
  let IncrVal = Value[1];
  return (
    <div>
        <br/> Value is : {Value} <br/>
        <button onClick= {()=> {IncrVal(++Value[0])}}>useState Increment</button> <br/>

        <br/> Increment & Decrement Using UseReducer: {state} <br/>

        <button onClick= {()=> {dispatch ({type: "INCREMENT"}) } }>useReducer Increment</button> &nbsp; &nbsp;
        <button onClick= {()=> {dispatch ({type: "DECREMENT"}) } }>useReducer Decrement</button>
    </div>
  );
}


export default RoomChild;
