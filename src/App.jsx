 import { useState } from "react";
 import Card from "./components/Card";
 
function App() {

  const [counter, setCounter] = useState(1 ) 
  
  //  let counter =15;

   const addValue = () =>{
    console.log("clicked", counter)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
   }
   const removeValue = () =>{
    console.log("clicked", counter)
    setCounter(counter - 1)
   }

  //  let myObj = {
  //   name:"john",
  //   age:30
  //  }
  //  let myArr =[1,2,3,4,50];

  return (
    <>
      
      <h1 className="bg-sky-200 text-3xl text-center mb-8">react</h1>
      <div className="text-center">
         <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value {counter}</button> <br />
      <br />
      <button onClick={removeValue}>remove value{counter}</button>
     
      </div>
      <div className="flex justify-between ">

    <Card username="john" btnText="click me"/>
    <Card username="jeni" btnText="visit me" />
      </div>

 
     
    </>
  )
}

export default App
