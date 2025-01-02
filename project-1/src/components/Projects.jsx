import { Navigate, Outlet, useNavigate } from "react-router-dom"

const Projects = () => {
    const navigate= useNavigate();
    function clickHandleProject1(){
        navigate('/projects/project1')
    }
    function clickHandleProject2(){
        navigate('/projects/project2')
    }
    function clickHandleProject3(){
        navigate('/projects/project3')
    }
  return (
    <div className="text-center text-2xl">
        <div className="text-center text-2xl">Projects Page </div>
        <button className="bg-green-400 py-1 px-4 rounded-lg m-4" onClick={clickHandleProject1}>Project 1 </button> <br />
        <button className="bg-blue-400 py-1 px-4 rounded-lg m-4" onClick={clickHandleProject2}>Project 2 </button> <br />
        <button className="bg-red-400 py-1 px-4 rounded-lg m-4" onClick={clickHandleProject3}>Project 3 </button> <br />
        
        <Outlet/>
    </div>
    
  )
}
export default Projects