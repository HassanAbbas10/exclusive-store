import Dropdown from "../Dropdown/Dropdown"


const TopHeader = () => {
  return (
    <div className="bg-black w-full sm:h-12 h-[10rem] flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-center md:text-left">
      <p className="text-sm text-slate-200">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      
      </p>
      <span className="text-slate-300 text-sm  font-bold cursor-pointer">
        Shop Now
      </span>
    </div>
    <div className="mt-2 sm:ml-[10rem] md:mt-0">
      <Dropdown />
    </div>
  </div>
  )
}

export default TopHeader