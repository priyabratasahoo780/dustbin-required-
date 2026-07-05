// question2 write a react Function Component that implement a Digital Clock


import React from 'react'
import { useState, useEffect } from 'react'
export default function Questionone() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
useEffect(()=>{
  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
},[]);
  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  )
}
