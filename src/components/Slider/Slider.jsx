
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
        <div className="sm:w-[55rem] w-full mx-auto sm:mx-5 my-10 sm:h-[20rem] sm:p-5 ">
          <Slider {...settings}>
            <div>
              <img src="https://th.bing.com/th/id/OIP.AOKJJ986l7bnttZ7uat_sQHaHa?rs=1&pid=ImgDetMain"  alt="Slide 1" className="w-[50rem] sm:h-[30rem] h-[25rem] object-fit" />
            </div>
            <div>
              <img src="https://th.bing.com/th/id/R.05a816a28c9dab57fe191b2be9f3e30e?rik=5WQnzlQj%2b63xuA&pid=ImgRaw&r=0" alt="Slide 2" className="w-[50rem] sm:h-[30rem] h-[25rem] object-fit"/>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/3103/8852/products/4_Piece_Canvas_Modern_Abstract_patterns_6f121d35-500b-4a7b-aefa-bdcd1a54d208.jpg?v=1570037115" alt="Slide 3" className="w-[50rem] sm:h-[30rem] h-[25rem] object-fit" />
            </div>
          </Slider>
        </div>
      );
}

export default ImageSlider