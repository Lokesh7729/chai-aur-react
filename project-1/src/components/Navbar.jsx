import { NavLink } from "react-router-dom"


// import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
        <ul className="flex gap-10 text-blue-300 text-3xl justify-center bg-white-700 p-4">
            <li>
               <NavLink  to="/" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Home</NavLink>
            </li>
            <li>
               <NavLink to="/about" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>About</NavLink>
            </li>
            <li>
               <NavLink to="/projects" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Project</NavLink>
            </li>
        </ul>
    </div>
  )
}
export default Navbar   