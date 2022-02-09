import { Box, Container } from '@mui/material';
import React from 'react';
import HeroLayout from './layout/HeroLayout';

const Hero = () => {
    return (
        <div>
            <Container maxWidth="xl">

                <HeroLayout position={{
                    bottom: '-90px',
                    right: '-40px',
                }} text={<div>Engaging & <br /> Accessible Online <br /> Course</div>}
                />

            </Container>
        </div >
    );
};

export default Hero;