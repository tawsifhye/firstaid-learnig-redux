import { Typography } from '@mui/material';
import React from 'react';

const Content = ({ text }) => {
    return (
        <div>
            <Typography sx={{
                fontSize: '18px',
                lineHeight: '145%',
                color: '#435770',
            }}>
                {text}
            </Typography>
        </div>
    );
};

export default Content;