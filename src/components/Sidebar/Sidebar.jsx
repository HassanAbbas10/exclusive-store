import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Sidebar = () => {
  return (
    <div>
        
        <div className="sm:w-[20rem] w-full items-center sm:justify-normal justify-center bg-white text-white h-[25rem] p-5 flex flex-col sm:border-r-2 sm:border-slate-200">
      <h2 className="text-2xl mb-6 ">Menu</h2>
      <a  className="mb-2 hover:text-gray-400 text-black">Women Fashion <ChevronRightOutlinedIcon/></a>
      <a  className="mb-2 hover:text-gray-400 text-black">Mens Fashion  <ChevronRightOutlinedIcon/></a>
      <a  className="mb-2 hover:text-gray-400 text-black">Electronics</a>
      <a  className="mb-2 hover:text-gray-400 text-black">Home & LifeStyle</a>
      <a  className="mb-2 hover:text-gray-400 text-black">Medicine</a>
      <a  className="mb-2 hover:text-gray-400 text-black">Sports & Outdoor</a>
      <a  className="mb-2 hover:text-gray-400 text-black">Baby's & Toys</a>
      <a  className="mb-2 hover:text-gray-400 text-black">Grocery & Pets</a>
      <a  className="mb-2 hover:text-gray-400 text-black">Sports & Outdo</a>
    </div>
    
    </div>
  )
}

export default Sidebar