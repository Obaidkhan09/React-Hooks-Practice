import React, { useState } from 'react';


function Room(){

    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(18);
    // function updateLit(){
    //     console.log("Button Clicked");
    //     setLit(!isLit);
    // }

    return (
      <div>
        This Room is {isLit ? 'Lit' : 'Dark'};
        <br/>
        <button onClick = {() => setLit(!isLit) }>Toggle Lit</button>
        <br/>
        The age is: {age};
        <br/>
        <button onClick = {() => setAge(++age) }>Increment Age</button>
      </div>
    );
  }
  
  
  export default Room;