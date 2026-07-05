import React from 'react'
import { useState } from 'react'
export default function Takes() {
   const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [data, setData] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const datas = {
      name,
      email,
      password
    }
    setData([...data, datas]);
        
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
   
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={ (e) => setName(e.target.value)} value={name}/>
         <label htmlFor="email">Email:</label>
        <input type="email" onChange={ (e) => setEmail(e.target.value)} value={email}/>
         <label htmlFor="password">Password:</label>
        <input type="password" onChange={ (e) => setPassword(e.target.value)} value={password}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      
        
        
       {
        data.map((ele,index) => (
          <div key={index}>
            <h1>Name : {ele.name}</h1>
            <h1>Email : {ele.email}</h1>
            <h1>Password : {ele.password}</h1>
            </div>
        ))
       }
      
  
       
    </div>
  )
}
