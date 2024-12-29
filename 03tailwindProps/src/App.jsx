import { useState } from "react";
import Card from "./components/card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const obj={
    name:"lokesh",
    age:21
  }

  return (
    <div className="bg-white ">
      <h1 className="bg-purple-400 p-4 rounded-xl border-2 border-blue-500 mb-10 ">
        Tailwind test
      </h1>
      <Card channel="chai aur code" someObj= {obj}/>
      <br />
      <Card/>
      
    </div>
  );
}

export default App;
