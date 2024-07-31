import Rec from "../../assets/Rec.svg";
import { useState, useEffect } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import Cards from "../Cards/Cards";
import axios from "axios";
const FlashSale = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) return <p>Loading 🎃</p>;
  if (error) return <p>Error ❌ {error.message}</p>;

  return (
    <div className="flex flex-col sm:my-[8rem] w-full mx-auto">
      <div className=" sm:pl-[8rem] gap-5 pl-[2rem] flex flex-row justify-start items-center">
        <img src={Rec} />
        <p className="text-red-500 text-xl font-semibold">Today's</p>
      </div>
      <div>
        <div>
          <div className="sm:pl-[8rem] sm:gap-5 gap-2 pl-[2rem] mt-5 flex flex-col sm:flex-row items-center justify-start">
            <span className="tracking-wider text-bold text-2xl">
              Flash Sales
            </span>
            <div className="flex flex-row gap-3">
              <div className="flex flex-col sm:ml-[10rem]">
                <span className="text-sm text-black font-semibold">Days</span>
                <span className="sm:text-4xl text-sm text-black">03</span>
              </div>
              <span className="text-red-600 sm:text-4xl text-sm flex mt-2">
                :
              </span>
              <div className="flex flex-col sm:ml-[2rem]">
                <span className="text-sm text-black font-semibold">Hours</span>
                <span className="sm:text-4xl text-sm text-black">03</span>
              </div>
              <span className="text-red-600 sm:text-4xl text-sm  mt-2">:</span>
              <div className="flex flex-col sm:ml-[2rem]">
                <span className="text-sm text-black font-semibold">
                  Minutes
                </span>
                <span className="sm:text-4xl text-sm text-black">03</span>
              </div>
              <span className="text-red-600 sm:text-4xl text-sm  mt-2">:</span>
              <div className="flex flex-col sm:ml-[2rem]">
                <span className="text-sm text-black font-semibold">
                  Seconds
                </span>
                <span className="sm:text-4xl text-sm text-black">03</span>
              </div>
            </div>
            <div className="sm:ml-[15rem] space-x-4">
              <WestIcon />
              <EastIcon />
            </div>
          </div>
        </div>
      </div>
      <Cards datas={data} />
{console.log(data)}
    </div>
  );
};

export default FlashSale;
