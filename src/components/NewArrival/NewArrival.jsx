
import Rec from "../../assets/Rec.svg";

const NewArrival = () => {


 


  return (
    <div className="flex flex-col sm:my-[8rem] w-full mx-auto overflow-hidden">
      <div className=" sm:pl-[8rem] gap-5 pl-[2rem] flex flex-row justify-start items-center">
        <img src={Rec} />
        <p className="text-red-500 text-xl font-semibold mx-auto">Featured</p>
      </div>
      <div className="mx-auto">
      <div>
          <div className="sm:pl-[8rem] sm:gap-5 gap-2 pl-[2rem] mt-5 flex flex-col sm:flex-row items-center justify-between mx-auto">
            <span className="tracking-wider text-bold text-2xl flex justify-start items-start mx-auto">
              New Arrival
            </span>
           
            
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default NewArrival;
