import Rec from "../../assets/Rec.svg";
import { useState, useEffect } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import Cards from "../Cards/Cards";
import axios from "axios";
const ExploreItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/category/electronics?limit=8');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) return <p className="mx-auto">Loading 🎃</p>;
  if (error) return <p className="mx-auto">Error ❌ {error.message}</p>;

  return (
    <div className="flex flex-col sm:my-[8rem] w-full mx-auto">
      <div className=" sm:pl-[8rem] gap-5 pl-[2rem] flex flex-row justify-start items-center">
        <img src={Rec} />
        <p className="text-red-500 text-xl font-semibold">Our Products</p>
      </div>
      <div>
      <div>
          <div className="sm:pl-[8rem] sm:gap-5 gap-2 pl-[2rem] mt-5 flex flex-col sm:flex-row items-center justify-between">
            <span className="tracking-wider text-bold text-3xl font-bold flex justify-start items-start">
              Explore Our Products
            </span>
           
            <div className="sm:ml-[15rem] space-x-4 sm:mr-[14rem] mr-[3rem]">
              <WestIcon />
              <EastIcon />
            </div>
          </div>
        </div>
      </div>
      <Cards datas={data} />
      <div className="flex items-center justify-center m-10 ">
      <button className="sm:px-3 px-2 sm:py-3 py-2  text-white bg-red-500 w-[12rem] flex items-center justify-center h-full rounded-sm">
        View All Products
      </button>
      </div>
    </div>
  );
};

export default ExploreItems;
