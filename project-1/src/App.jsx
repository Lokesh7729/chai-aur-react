import { createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"
import ParamComp from "./components/ParamComp"
import Project1 from "./components/Project1"
import Project2 from "./components/Project2"
import Project3 from "./components/Project3"
import NotFound from "./components/NotFound"


const router = createBrowserRouter(
  [
    {path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {path:"/about",
      element:<div>
      <Navbar/>
      <About/>
    </div>
    },
    {path:"/projects",
      element:<div>
      <Navbar/>
      <Projects/>
    </div>,
    children:[
      {
        path:"project1",
        element:<Project1/>
      },
      {
        path:"project2",
        element:<Project2/>
      },
      {
        path:"project3",
        element:<Project3/>
      },
    ]
    },
    {
      path:"/student/:id",
      element:<div>
      <Navbar/>
      <ParamComp/>
    </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
    
   
  ]
)

function App() {

  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
