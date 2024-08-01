import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        
        <div className="sm:w-[20rem] w-full items-center sm:justify-normal justify-center bg-white text-white h-[25rem] p-5 flex flex-col sm:border-r-2 sm:border-slate-200">
      <h2 className="text-2xl sm:mb-6 ">Menu</h2>
      <Link  className="mb-2 hover:text-gray-400 text-black">Women Fashion <ChevronRightOutlinedIcon/></Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Mens Fashion  <ChevronRightOutlinedIcon/></Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Electronics</Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Home & LifeStyle</Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Medicine</Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Sports & Outdoor</Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Baby's & Toys</Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Grocery & Pets</Link>
      <Link  className="mb-2 hover:text-gray-400 text-black">Sports & Outdo</Link>
    </div>
    
    </div>
  )
}

export default Sidebar