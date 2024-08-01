/* eslint-disable react/prop-types */

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility';
const Cards = ({ datas }) => {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 mx-16 sm:mx-24">
      {datas.map((cardData) => (
        <div
          key={cardData.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg  ring-opacity-40"
        >
          <div className="relative group">
          <div className="w-40 sm:py-10 py-[1.5rem] h-40 sm:h-52 ml-12 overflow-hidden">
              <img
                className="object-contain w-full h-full"
                src={cardData.image}
                alt="Product Image"
              />
            </div>
            <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md ">
             <FavoriteBorderIcon/>
            </div>
            <div className="absolute top-8 right-0 px-2 py-1 m-2 rounded-md ">
             <VisibilityIcon/>
            </div>
            <div className='absolute left-0 top-3 px-2 py-1 rounded-md bg-red-500 text-white'>
              40%
            </div>
            <button className='absolute flex inset-0 sm:h-10 h-[1.75rem] bottom-0 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-black top-[8rem] sm:top-[10.75rem] text-white font-bold rounded-b-md'>Add To Cart</button>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium mb-2">{cardData.title}</h3>
            
            <div className="flex flex-col items-start justify-start">
              <span className="font-bold text-lg text-red-500">${cardData.price}</span>
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${index < Math.floor(cardData.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
                <p className='text-slate-500 pl-1'>
                  ({cardData.rating.count})
                </p>
              </div>
      
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
