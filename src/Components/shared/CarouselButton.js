import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Styles = {
    nextPrev: {
        background: '#FFF1EF',
        borderRadius: '6px',
        padding: '20px',
        color: '#EA2E10',
        '&:active': {
            color: '#FFFFFF',
            background: '#EA2E10'
        }
    }
}

const CarouselButton = ({ sliderRef }) => {

    return (
        <div>
            <ArrowBackIcon sx={{ ...Styles.nextPrev, mr: '10px' }} onClick={() => sliderRef?.current?.slickPrev()} />
            <ArrowForwardIcon sx={Styles.nextPrev} onClick={() => sliderRef?.current?.slickNext()} />
        </div>
    );
};

export default CarouselButton;