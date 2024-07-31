import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Footer = () => {
  return (
    <>


<footer className="w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-14 pb-20 max-w-md mx-auto md:max-w-2xl lg:max-w-full text-center">
      <div className=" pb-6 md:pb-0">
        <section className="text-lg mx-auto transition-all duration-500 space-y-5">
          <p className="font-quicksand">
            <a href="#" className="text-white text-2xl hover:text-white duration-500">
             Exclusive 
            </a>
          </p>
          <p className="text-gray-400  hover:text-white duration-500">
           Subscribe
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
            Get 10 % for your first offer
          </p>
          <div className="flex items-center rounded-md shadow-sm sm:w-full ">
            <input
              type="text"
              className="border-gray-400 border-2 flex-grow px-4 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500  placeholder:text-sm"
              placeholder="Enter your mail"
            />
            <button className="-ml-12 sm:px-2  bg-gray-100 hover:bg-gray-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ">
              <SearchOutlinedIcon />
            </button>
          </div>
        </section>
      </div>

      <div className=" pb-6 md:pb-0">
        <section className="text-lg mx-auto transition-all duration-500 space-y-2">
        <p className="font-quicksand">
            <a href="#" className="text-white text-2xl hover:text-white duration-500">
            Support
            </a>
          </p>
          <p className="font-quicksand">
         
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white duration-500"
            >
             111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
            </Link>
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          exclusive@gmail.com
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          +88015-88888-9999
          </p>
        </section>
      </div>

      <div className="  pb-6 md:pb-0">
        <section className="text-lg mx-auto transition-all duration-500 space-y-2">
        <p className="font-quicksand">
            <a href="#" className="text-white text-2xl hover:text-white duration-500">
            Account
            </a>
          </p>
          <p className="font-quicksand">
         
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white duration-500"
            >
             My Account
            </Link>
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          Login / Register
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          Cart
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          Wishlist
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          Shop
          </p>
        </section>
      </div>

      <div className="  pb-6 md:pb-0">
        <section className="text-lg mx-auto transition-all duration-500 space-y-2">
        <p className="font-quicksand">
            <a href="#" className="text-white text-2xl hover:text-white duration-500">
            Quick Link
            </a>
          </p>
          <p className="font-quicksand">
         
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white duration-500"
            >
            Privacy Policy
            </Link>
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          Terms Of Use
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          FAQ
          </p>
          <p className="text-gray-400 hover:text-white duration-500">
          Contact
          </p>
          
        </section>
      </div>
      <div className="  pb-6 md:pb-0">
        <section className="text-lg mx-auto transition-all duration-500 space-y-2">
        <p className="font-quicksand">
            <a href="#" className="text-white text-2xl hover:text-white duration-500">
            Download App
            </a>
          </p>
          <p className="font-quicksand">
         
            <span
            
              className="text-gray-400 hover:text-white duration-500"
            >
            Save $3 with App new user only
            </span>
          </p>
         <div className="flex flex-row">

         </div>
          
        </section>
      </div>


   
    </div>

        <div className="py-7 border-t border-gray-700 ">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-center lg:flex-row">
            <span className="text-gray-600  font-quicksand block">
              ©<Link to="/">Copyright Rimell</Link> 2022 All Rights Reserved
            </span>

           

            
          
            
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer