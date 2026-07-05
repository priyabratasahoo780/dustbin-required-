import React from 'react'
import { useState } from 'react';
export default function Countdecrease() {
  const [time, setTime] = useState(15);

  const startTimer = () => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if(prev < 1){
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      })
      
    },1000);
  }
  const resetTimer = () => {
    setTime(15);
  }
  return (
    <div>
      <h1>Time : {time}</h1>
      <button onClick={startTimer}>start</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  )
}


