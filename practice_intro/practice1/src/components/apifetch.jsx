import React from 'react'
import { useState, useEffect } from 'react';
export default function Apifetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("error fetching data", error));
  })
  return (
    <div>
    <h1>API data</h1>
    {
      data.map((items,index) =>(
        <div key={index}>
        <h2>{items.title}</h2>
        <p>{items.body}</p>
        </div>
      ))
    }
    </div>
  )
}

