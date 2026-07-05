import React from 'react'
import {useState} from 'react'
export default function Password() {
  const [passwords, setPasswords] = useState(false);
  return (
    <div>
      <input type= {passwords ? "text": "password" } />
      <button onClick={() => setPasswords(!passwords)}>
         {passwords ? "Hide" : "Show"}
      </button>
    </div>
  )
}
