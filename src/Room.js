import React, { useState } from 'react';
import RoomChild from './RoomChild'
import './Room.css'


function Room(){

    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(18);
    // function updateLit(){
    //     console.log("Button Clicked");
    //     setLit(!isLit);
    // }

    return (
      <div className= { `room ${isLit? "lit" : "dark"}` }>
        This Room is {isLit ? 'Lit' : 'Dark'};
        <br/>
        <button onClick = {() => setLit(!isLit) }>Toggle Mode</button>
        <br/>
        The age is: {age};
        <br/>
        <button onClick = {() => setAge(++age) }>Increment Age</button>
        <RoomChild></RoomChild>
      </div>
    );
  }
  
  
  export default Room;