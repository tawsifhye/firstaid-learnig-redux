import { Box, Button } from '@mui/material';
import React from 'react';

const AuthenticationButton = ({ text, backgroundColor, icon, onClick }) => {
    console.log({ onClick })
    return (
        <Box>

            <Button variant="contained" sx={{
                width: '100%', fontWeight: 600,
                fontSize: '12px',
                lineHeight: '71.5%',
                textTransform: 'uppercase',
                color: '#FBF4F4',
                borderRadius: '5px',
                mt: 3,
                py: '21px',
                backgroundColor: backgroundColor
            }}
                onClick={onClick}
            >
                <img style={{ marginRight: '5px' }} src={icon} alt="" />  {text}
            </Button>
        </Box>
    );
};

export default AuthenticationButton;