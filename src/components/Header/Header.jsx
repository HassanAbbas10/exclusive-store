import TopHeader from "./TopHeader"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <TopHeader />
    <header className="text-gray-600 body-font sm:mt-4 mt-8 border-b-2 border-slate-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl text-black">Exclusive</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
          <Link className="mr-5 hover:text-gray-900 hover:border-b-2 border-blue-500">Home</Link>
          <Link className="mr-5 hover:text-gray-900 hover:border-b-2 border-blue-500">Contact</Link>
          <Link className="mr-5 hover:text-gray-900 hover:border-b-2 border-blue-500">About</Link>
          <Link className="mr-5 hover:text-gray-900 hover:border-b-2 border-blue-500">Signup</Link>
        </nav>
        <div className="flex items-center py-1 px-3 sm:px-1 mt-4 md:mt-0 sm:gap-5 gap-2 w-full md:w-auto">
          <div className="flex items-center border border-gray-100 rounded-md shadow-sm sm:w-full ">
            <input
              type="text"
              className="flex-grow px-2 sm:focus:px-10 focus:px-6 duration-700 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500  placeholder:text-sm"
              placeholder="What are you looking for?"
            />
            <button className="sm:px-3.4 px-2 py-1 bg-gray-100 hover:bg-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-700">
              <SearchOutlinedIcon />
            </button>
          </div>
          <FavoriteBorderIcon className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          <ShoppingCartIcon className="text-gray-600 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>
    </header>
  </>
  )
}

export default Header