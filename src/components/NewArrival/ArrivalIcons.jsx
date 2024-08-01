import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GppGoodIcon from '@mui/icons-material/GppGood';


const ArrivalIcons = () => {
  return (
    <div className="sm:mx-20 mb-5 sm:my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="flex flex-col items-center p-4">
            <div className='bg-gray-400 p-4 rounded-full'>
            <LocalShippingIcon style={{ color:"white",fontSize: 60 }} className="bg-black p-2 h-[10rem] w-[10rem] rounded-full text-black hover:text-white transition-colors duration-300 " />
            </div>
         
         <h1 className='mt-2 text-xl font-bold text-black'>
         FREE AND FAST DELIVERY
         </h1>
          <p className="text-center text-sm text-black">free delivery for all orders over $140</p>
        </div>
        
        <div className="flex flex-col items-center p-4">
            <div className='bg-gray-400 p-4 rounded-full'>
            <SupportAgentIcon style={{ color:"white",fontSize: 60 }} className="bg-black p-2 h-[10rem] w-[10rem] rounded-full text-black transition-colors duration-300 " />
            </div>
          
          <h1 className=' mt-2 text-xl font-bold text-black'>
          24/7 CUSTOMER SERVICE
         </h1>
          <p className="text-center text-black">Friendly 24/7 customer support</p>
        </div>
        
        <div className="flex flex-col items-center p-4">
            <div className='bg-gray-400 p-4 rounded-full'>
          <GppGoodIcon style={{ color:"white",fontSize: 60 }} className="bg-black p-2 h-[10rem] w-[10rem] rounded-full text-black transition-colors duration-300 " />
          </div>
          <h1 className='mt-2 text-xl font-bold text-black'>
          MONEY BACK GUARANTEE
         </h1>
         
          <p className="text-center text-black">We reurn money within 30 days</p>
        </div>
        
      </div>
    </div>
  );
};

export default ArrivalIcons;