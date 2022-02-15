import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const CartBox = () => {
    return (

        <Box sx={{ backgroundColor: '#EDF5FF', py: '50px' }}>
            <Container sx={{
                background: '#FFFFFF',
                borderRadius: '10px'
            }}>
                <Typography variant='h4'>Shopping Cart</Typography>
                <Box>

                </Box>
            </Container>

        </Box>


    );
};

export default CartBox;