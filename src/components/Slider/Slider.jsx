
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      
      };
    
      return (
        <div className="sm:w-[55rem] w-full mx-auto sm:mx-5 h-[20rem] sm:p-5 ">
          <Slider {...settings}>
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="w-full h-full object-cover" />
            </div>
          </Slider>
        </div>
      );
}

export default ImageSlider