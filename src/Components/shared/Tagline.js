import { Typography } from '@mui/material';
import React from 'react';

const TagLine = ({ fontSize, text }) => {
    return (
        <div>
            <Typography
                sx={{
                    fontFamily: 'Circular Std',
                    fontStyle: 'normal',
                    fontWeight: 900,
                    fontSize: {
                        xs: '20px',
                        lg: fontSize || '55px',
                    },
                    lineHeight: '125%',
                    color: '#272D4E',
                }}>
                {text}
            </Typography>
        </div>
    );
};

export default TagLine;