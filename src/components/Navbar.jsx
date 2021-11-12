import { Link } from "react-router-dom";
import { Search } from "./Search";
export const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-xl bg-gray-600 py-1 px-2 font-bold text-white rounded dark:bg-white dark:text-gray-500">🔥 Mbah Gugel</p>
        </Link>
          <button className="bg-gray-500 dark:bg-gray-200 p-2 rounded-md hover:shadow-lg" type="button" onClick={()=>setDarkTheme(!darkTheme)}>
          {darkTheme ? '🌙' : '☀️'}
          </button>
      </div>
      <Search />
    </div>
  )
}
