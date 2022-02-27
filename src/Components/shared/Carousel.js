import React from 'react';
import Slider from 'react-slick';


const Carousel = ({ content, sliderRef, slidesToShow, slidesToScroll, arrows, dots, center }) => {

    const settings = {
        arrows: arrows || false,
        dots: dots || false,
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
                    infinite: false,
                    dots: dots || false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                    dots: dots || false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: dots || false
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