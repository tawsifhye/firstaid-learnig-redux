import React from 'react';
import Slider from 'react-slick';
// import '../GlobalCss.css'

const Carousel = ({ content, sliderRef, slidesToShow, slidesToScroll }) => {

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: slidesToShow || 4,
        slidesToScroll: slidesToScroll || 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {content}
            </Slider>
        </div>
    );
};

export default Carousel;