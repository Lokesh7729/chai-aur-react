import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("grey");

  return (
    <div className="w-full bgcolor " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2 "> 
        <div className="flex flex-wrap justify-center gap-10 shadow-lg bg-white rounded-3xl py-2 px-5" > 
          <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-2xl shadow-lg " style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-2xl shadow-lg " style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-2xl shadow-lg " style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=> setColor("orange")} className="outline-none px-4 py-1 rounded-2xl shadow-lg " style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-2xl shadow-lg " style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=> setColor("lavender")} className="outline-none px-4 py-1 rounded-2xl shadow-lg " style={{backgroundColor:"lavender"}}>lavender</button>
          <button onClick={()=> setColor("plum")} className="outline-none px-4 py-1 rounded-2xl shadow-lg " style={{backgroundColor:"plum"}}>plum</button>

          </div>
      </div>
    </div>
  );
}

export default App;
