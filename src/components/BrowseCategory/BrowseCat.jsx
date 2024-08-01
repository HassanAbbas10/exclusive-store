import { categories } from "@/utils/cat";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import IonIcon from '@reacticons/ionicons';
import Rec from "../../assets/Rec.svg";
const BrowseCat = () => {
  return (
    <>
    <div className="flex flex-col sm:my-[8rem] w-full mx-auto">
      <div className=" sm:pl-[8rem] gap-5 pl-[2rem] flex flex-row justify-start items-center">
        <img src={Rec} />
        <p className="text-red-500 text-xl font-semibold">Categories</p>
      </div>
      <div>
        <div>
          <div className="sm:pl-[8rem] sm:gap-5 gap-2 pl-[2rem] mt-5 flex flex-col sm:flex-row items-center justify-between">
            <span className="tracking-wider text-bold text-2xl flex justify-start items-start">
              Browse By Category
            </span>
           
            <div className="sm:ml-[15rem] space-x-4 sm:mr-[14rem] mr-[3rem]">
              <WestIcon />
              <EastIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-normal ">
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-8 mx-16 sm:mx-28">
{categories.map((categories)=>(
   
  
        <div key={categories.id} className="group border w-[8rem] hover:bg-red-500 duration-500 border-red-500 px-[5rem] py-[1.5rem] flex flex-col justify-center items-center gap-4 rounded-md mb-4">
          
            <IonIcon size="large" className="text-black  group-hover:text-white" name={categories.picture}/>
            
        
        <p className="text-lg group-hover:text-white font-medium">{categories.name}</p>
        </div>
    
    
))}
</div>
      </div>
    
    </div> 
    </>
  )
}

export default BrowseCat