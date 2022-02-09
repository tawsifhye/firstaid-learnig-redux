
import { Box, Typography } from '@mui/material';

import React from 'react';


const HeroLayout = ({ styling }) => {
    console.log();
    return (
        // backgroundColor: '#FFF6F6'
        <div>

            <Box
                sx={{

                    height: '450px',
                    width: {
                        xs: '300px',
                        lg: '450px'
                    },
                    backgroundColor: '#FFE4E0',
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: styling.bottom,
                    right: styling.right,

                }}
            >


            </Box>
        </div >
    );
}


export default HeroLayout;