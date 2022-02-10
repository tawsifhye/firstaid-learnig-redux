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

const CarouselButton = ({ slider }) => {

    return (
        <div>
            <ArrowBackIcon sx={{ ...Styles.nextPrev, mr: '10px' }} onClick={() => slider?.current?.slickPrev()} />
            <ArrowForwardIcon sx={Styles.nextPrev} onClick={() => slider?.current?.slickNext()} />
        </div>
    );
};

export default CarouselButton;