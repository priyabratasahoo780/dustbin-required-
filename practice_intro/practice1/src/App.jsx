import React from 'react'
import Apifetch from "./components/apifetch";
// import Takens from "./components/takens";
// import Inputs from './components/inputs';
// import Takes from './components/Takes';
import Password from './components/Password';
import Reduce from './components/reduce';
import Counter from './components/counter';
import Routess from './components/Routess';
export default function App() {
  return (
    <div>
      {/* <Apifetch />
      <Takens />
      <Inputs/>
      <Takes/> */}
      <Reduce/>
      <Counter/>
      <Apifetch />
      <Password/>
      <Routess/>
    </div>
  )
}
