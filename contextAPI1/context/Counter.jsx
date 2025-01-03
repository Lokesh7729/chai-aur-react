
import { createContext, useState } from "react";
// create context
 export const CounterContext = createContext(null)
 // now we will create a provider

 export const CounteProvider= (props)=>{
    const [count,setCount]= useState(0);
    return(
        <CounterContext.Provider value={{count, setCount, name:"lokesh"}}>
            {props.children}
        </CounterContext.Provider>
    )
 }