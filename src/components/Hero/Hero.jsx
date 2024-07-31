import Sidebar from "../Sidebar/Sidebar"
import ImageSlider from "../Slider/Slider"


const Hero = () => {
  return (
    <>
    <div className="flex  w-full sm:justify-around flex-col sm:flex-row ">
<Sidebar/>
<ImageSlider/>
    </div>
    </>
  )
}

export default Hero