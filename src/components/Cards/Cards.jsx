
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility';
const Cards = ({ datas }) => {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 mx-20">
      {datas.map((cardData) => (
        <div
          key={cardData.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg  ring-opacity-40"
        >
          <div className="relative">
          <div className="w-52 h-64 overflow-hidden">
              <img
                className="object-fit w-full h-full"
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
