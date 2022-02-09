
import { Box, Typography } from '@mui/material';

import React from 'react';


const HeroLayout = ({ styling, text }) => {
    console.log();
    return (
        // backgroundColor: '#FFF6F6'
        <div>


            <Typography
                sx={{
                    fontFamily: 'Circular Std',
                    fontStyle: 'normal',
                    fontWeight: 900,
                    fontSize: {
                        xs: '20px',
                        lg: styling.fontSize,
                    },
                    lineHeight: '125%',
                    color: '#272D4E',
                    whiteSpace: 'pre-line',
                    wordWrap: 'break-word',
                }}>
                {text}
            </Typography>
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