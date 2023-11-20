import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src="images/Rectangle 9.svg" alt="Image 1" />
        </div>
        <div>
          <img src="images/Rectangle 10.svg" alt="Image 2" />
        </div>
        <div>
          <img src="images/Rectangle 11.svg" alt="Image 3" />
        </div>
      </Slider>
    );
  };

export default Carousel;