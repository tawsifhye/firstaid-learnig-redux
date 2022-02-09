
import { Box } from '@mui/material';

import React from 'react';


const HeroLayout = ({ styling }) => {
    return (
        <div>

            <Box
                sx={{

                    height: '450px',
                    width: {
                        xs: '300px',
                        lg: '380px',
                        xl: '450px'
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