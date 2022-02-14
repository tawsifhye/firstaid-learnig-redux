import { Button } from '@mui/material';
import React from 'react';

const Styles = {
    loginButton: {
        fontWeight: 'bold',
        borderRadius: '11.21px',
        backgroundColor: '#EA2E10',
        width: {
            md: '152.43px'
        },
        height: '67.25px'
    }
}
const PrimaryButton = ({ text, onClick }) => {
    return (
        <div>
            <Button onClick={onClick} variant="contained"
                sx={Styles.loginButton}>
                {text}
            </Button>
        </div>
    );
};

export default PrimaryButton;
