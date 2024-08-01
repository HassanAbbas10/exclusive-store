import jbl from "../../assets/speaker.png";

const ProductCountdown = () => {
  return (
    <div>
      <section className="bg-black mx-auto">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="text-xl text-green-400 font-semibold pb-10">
              Categories
            </p>
            <h1 className="text-white text-5xl font-bold leading-none sm:text-6xl">
              Enhance Your Music Experience
            </h1>
            <div className="flex flex-row sm:gap-8 gap-3 my-8">
              <div className="bg-white rounded-full p-3 px-4 my-4 w-16">
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-sm font-bold">23</p>
                  <p className="text-[10px]">Hours</p>
                </div>
              </div>
              <div className="bg-white rounded-full p-3 px-5 my-4 w-16">
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-sm font-bold">13</p>
                  <p className="text-[10px]">Days</p>
                </div>
              </div>
              <div className="bg-white rounded-full p-3 px-4 my-4 w-16">
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-sm font-bold">52</p>
                  <p className="text-[10px]">Minutes</p>
                </div>
              </div>
              <div className="bg-white rounded-full p-3 px-4 my-4 w-16">
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-sm font-bold">06</p>
                  <p className="text-[10px]">Seconds</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="bg-green-400 text-white py-4 sm:px-12 rounded-md">
                Buy Now!
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mx-auto">
            <img
              src={jbl}
              alt="speaker"
              className="object-cover sm:h-[50rem] h-[20rem] w-full mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCountdown;
