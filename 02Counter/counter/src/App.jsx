import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(10)

  // let counter =5
  function addValue(){
    console.log("value added",Math.random()*100)
    // counter++;
    if(counter<20){
       setCounter(counter+1)
    console.log(counter)
    }
   
  }
  function decValue(){
    console.log("value added",Math.random()*100)
    if(counter>0){
        setCounter(counter-1)
    }
  

  }
  return (
    <>
      <h1>lokesh aur code{counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Dec vlaue </button>
    </>
  )
}

export default App
