import React from 'react';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/slice';
function App() {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users)
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  function handleSubmit(e){
    e.preventDefault();
   dispatch(addUser({name,email,password}))
   setName('');
   setEmail('');
   setPassword('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type="text" 
      placeholder='Enter Your Name'
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='email'>Email:</label>
      <input type="text" 
      placeholder='Enter Your Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password:</label>
      <input type="text" 
      placeholder='Enter Your Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
      </form>
      {
        user.map((items,index) => (
          <div Key={index}>
          <h1>User Details:</h1>
          <h1>Name:{items.name}</h1>
          <h1>Email:{items.email}</h1>
          <h1>Password:{items.password}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default App
