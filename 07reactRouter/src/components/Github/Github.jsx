import { useEffect, useState } from "react"
import { data } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

function Github() {
    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/lokesh7729")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
   
    <div className="text-center m-4 bg-gray-600 text-white">Github followers : {data.followers} 
    <img src="{data.avatar_url}" alt="git pic" width={300} /> </div>
)
}
export default Github
export const githubInfoLoader= async()=>{
    const response= await fetch("https://api.github.com/users/lokesh7729")
    return response.json()
}