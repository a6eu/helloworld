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

      <Slider className='bg-yellow-500 h-80 w-[100%]' {...settings}>
        <div className=' h-80 bg-first bg-no-repeat bg-cover bg-center'></div>
        <div className=' h-80 bg-second bg-no-repeat bg-cover bg-center'></div>
        <div className=' h-80 bg-third bg-no-repeat bg-cover bg-center'></div>
      </Slider>
    );
  };

export default Carousel;