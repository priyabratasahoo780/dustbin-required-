import React from 'react'
import { useState } from 'react';
export default function Questionthree() {
   const [count, setCount] = useState(0);

    function Increment(){
      setCount(count + 1);
    }
    function Decrement(){
      setCount(count - 1);
    }
    function Reset(){
      setCount(0);
    }
  return (
   
    <div>
      <h1>Count: {count} </h1>
      <button onClick={Increment}>Increase by 1</button>
      <button onClick={Decrement}>Decrease by 1</button>
      <button onClick={Reset}>reset the Value</button>
    </div>
  )
}
