import React from 'react'
import { useState } from 'react';
export default function Counter() {
   const [count, setCount] = useState(0);
   const [show, setShow] = useState(false);
   const [disabled, setDisabled] = useState(false);
    function increment(){
      setCount(count + 1);
    }
    function decrement(){
      if(count > 0){
      setCount(count - 1);
    }
  }
  function reset(){
    setCount(0);
  }
  function toggleChange(){
    setDisabled(true);
  }
  return (
    <div>
      <button onClick ={toggleChange} disabled={disabled} >
        {disabled ? "disabled" : "eabled"}
      </button>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
      { show && (
      <h1>Counter : {count}</h1>
      )}
      <button onClick={increment}>Increse</button>
      <button onClick={decrement}>decrese</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
