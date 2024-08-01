import Rec from "../../assets/Rec.svg";
import { useState, useEffect } from "react";

import Cards from "../Cards/Cards";
import axios from "axios";
const BestSelling = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/electronics?limit=4");
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
        <p className="text-red-500 text-xl font-semibold">This Month</p>
      </div>
      <div>
        <div>
          <div className="sm:pl-[8rem] sm:gap-5 gap-2 pl-[2rem] mt-5 flex flex-col sm:flex-row items-center justify-between">
            <span className="tracking-wider text-bold text-3xl font-bold flex justify-center items-center">
              Best Selling Products
            </span>
          
            <div className="sm:ml-[15rem] space-x-4 flex justify-end items-end">
              <button className="sm:px-3 px-2 sm:py-3 py-2 mt-4 sm:mr-[8rem] mr-[3rem] text-white bg-red-500 w-[12rem] flex items-center justify-center h-full rounded-sm">
                View All 
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cards datas={data} />
    </div>
  );
};

export default BestSelling;
