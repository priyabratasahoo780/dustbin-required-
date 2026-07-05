import React from 'react'

export default function hello(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Email: {props.email}</h1>
    </div>
  )
}
