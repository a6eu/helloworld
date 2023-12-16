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
        autoPlay:true,
        autoplaySpeed: 6000,
    };
  
    return (
      <Slider className='h-80 w-[100%]' {...settings}>
        <div className=' h-80 bg-first bg-no-repeat bg-cover bg-center rounded-md'></div>
        <div className=' h-80 bg-second bg-no-repeat bg-cover bg-center rounded-md'></div>
        <div className=' h-80 bg-third bg-no-repeat bg-cover bg-center rounded-md'></div>
      </Slider>
    );
  };

export default Carousel;