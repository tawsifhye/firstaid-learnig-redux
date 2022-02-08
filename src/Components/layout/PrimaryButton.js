import { Button } from '@mui/material';
import React from 'react';

const Styles = {
    loginButton: {
        fontWeight: 'bold',
        borderRadius: '11.21px',
        width: {
            xs: '100px',
            md: '152.43px'
        },
        height: '67.25px'
    }
}
const PrimaryButton = ({ text }) => {
    return (
        <div>
            <Button variant="contained" color="error"
                sx={Styles.loginButton}>
                {text}
            </Button>
        </div>
    );
};

export default PrimaryButton;
