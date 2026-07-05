import React from 'react'
import { useReducer } from 'react'

const initialState = {
  name: "",
  email: "",
  password: "",
  data: [],
};

function Reducer(state,action){
  switch(action.type){
    case "SET_NAME" :
      return {...state, name:action.payload};
    case "SET_EMAIL" :
      return {...state, email:action.payload};
    case "SET_PASSWORD" :
      return {...state, password:action.payload};
      case "ADD_DATA" :
        return{
    ...state,
    data : [...state.data, action.payload],
    name: "",
    email: "",
    password: "",
        };
   default :
   return state;
  }
}
export default function Reduce() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    dispatch({
      type:"ADD_DATA",
      payload: newUser,
    });
  }
  function handleEdit(index){
   const userToEdit = state.data[index];
   dispatch({type:"SET_NAME", payload: userToEdit.name});
   dispatch({type:"SET_EMAIL", payload: userToEdit.email});
   dispatch({type:"SET_PASSWORD", payload: userToEdit.password});
  }
  function handleDelete(index){
    const newData = state.data.filter((_, i) => i !== index);
    dispatch({type:"SET_DATA", payload: newData});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={state.name} onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})} required/>
         <label htmlFor="Email">Email:</label>
        <input type="text" value={state.email} onChange={(e) => dispatch({type: "SET_EMAIL", payload: e.target.value})} required/>
         <label htmlFor="password">Password:</label>
        <input type="password" value={state.password} onChange={(e) => dispatch({type: "SET_PASSWORD", payload: e.target.value})} required/>
        <button type="submit">Submit</button>
        <button onClick={() => handleEdit(index)}>edit</button>
        <button onClick={() => handleDelete(index)}>delete</button>
      </form>

      {
        state.data.map((user,index) => (
           <div key={index}>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Password: {user.password}</h2>
        </div>
        ))
      }
    </div>
  )
}
