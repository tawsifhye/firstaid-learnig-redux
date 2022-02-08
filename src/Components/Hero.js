import { Container } from '@mui/material';
import React from 'react';
import HeroLayout from './layout/HeroLayout';

const Hero = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <HeroLayout />
            </Container>
        </div>
    );
};

export default Hero;