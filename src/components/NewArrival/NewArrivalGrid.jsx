import ps5 from "../../assets/ps5.png"
import women from '../../assets/women.png'
import perfume from '../../assets/perfume.png'
import speaker from '../../assets/wlesssp.png'
const NewArrivalGrid = () => {
  return (
    <>
    <div className="sm:mx-20  sm:mb-0 my-20 sm:my-10 sm:h-screen mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-0 ">
     
      <div className="col-span-1 md:col-span-1 bg-black h-[38rem] relative">
        <h1 className="absolute bottom-[9rem] left-16 text-white text-2xl">Play Station 5</h1>
        <p className="absolute bottom-[4.5rem] left-16 text-white text-sm w-[10rem]"> Black and White version of the PS5 coming out on sale.</p>
        <button
        className="absolute bottom-[2.5rem] left-12  border-b border-slate-300 w-[5rem] text-white text-md"
        >Shop Now</button>
        <img src={ps5} alt="Left" className="w-[30rem] object-fit h-[30rem] px-5 pt-5 mt-28" />
      </div>
      
     
      <div className="col-span-1 md:col-span-1 grid grid-rows-2 gap-0 sm:gap-4">
      
        <div className="row-span-1 bg-black flex items-center justify-center relative ">
        <h1 className="absolute bottom-[8rem] left-10 text-white text-2xl">Women’s Collections</h1>
        <p className="absolute bottom-[4.5rem] left-10 text-white text-sm w-[12rem]"> Featured woman collections that give you another vibe.</p>
        <button
        className="absolute bottom-[2.5rem] left-12  border-b border-slate-300 w-[5rem] text-white text-md "
        >Shop Now</button>
          <img src={women} alt="Top Right" className="w-[40rem] object-fit flex justify-center items-center h-[22rem] px-7" />
        </div>
        
    
        <div className="row-span-1 grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4 h-[15rem]">
          <div className="col-span-1 bg-black relative">
          <h1 className="absolute bottom-[4rem] left-6 text-white text-2xl">Speakers</h1>
        <p className="absolute bottom-[2.5rem] left-6 text-white text-sm w-[12rem]"> Amazon wireless speakers</p>
        <button
        className="absolute bottom-[1rem] left-6  border-b border-slate-300 w-[5rem] text-white text-md "
        >Shop Now</button>
            <img src={speaker} alt="Bottom Left" className="w-[13rem] object-fit h-[13rem] mt-5 ml-28 sm:ml-14 px-5" />
          </div>
          <div className="col-span-1 bg-black relative">
          <h1 className="absolute bottom-[4rem] left-6 text-white text-2xl">Perfume</h1>
        <p className="absolute bottom-[2.5rem] left-6 text-white text-sm w-[12rem]"> GUCCI INTENSE OUD EDP</p>
        <button
        className="absolute bottom-[1rem] left-6  border-b border-slate-300 w-[5rem] text-white text-md "
        >Shop Now</button>
            <img src={perfume} alt="Bottom Right" className="w-[13rem] object-fit h-[13rem] mt-5 ml-28 sm:ml-14" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default NewArrivalGrid
