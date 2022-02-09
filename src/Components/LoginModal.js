import { Box, Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import AuthenticationButton from './shared/AuthenticationButton';
import google_icon from '../images/google-icon.png';
import facebook_icon from '../images/facebook-icon.png';
import CloseIcon from '@mui/icons-material/Close';

const Styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        backgroundColor: 'background.paper',
        background: '#FFFFFF',
        borderRadius: '2px',
        boxShadow: 24,
        p: 4,
    },
    form: {
        width: '100%',
        border: '1px solid #767676',
        boxSizing: 'border-box',
        borderRadius: '5px'

    },
    label: {
        fontWeight: 600,
        fontSize: '12px',
        color: '#494949',
        mb: 1,
    }
}



const LoginModal = ({ handleClose, open, registered, setRegistered }) => {
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ position: 'absolute' }}
            >

                <Box sx={Styles.modal}>
                    <CloseIcon onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 16, right: 16,
                            backgroundColor: '#F8F8F8',
                            padding: 2,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: '.5s',
                            ':hover': {
                                color: 'white',
                                backgroundColor: 'black'
                            }
                        }} />
                    <Box sx={{ my: 5 }}>
                        <Typography id="modal-modal-title" sx={{
                            fontWeight: 'bold',
                            fontSize: '24px',
                            textAlign: 'center'
                        }}>
                            {registered ? 'Log In' : 'Sign Up'}

                        </Typography>
                        <AuthenticationButton text='Log In With Google' backgroundColor='#4688F1' icon={google_icon} />
                        <AuthenticationButton text='Log In With Facebook' backgroundColor='#3E5C97' icon={facebook_icon} />
                        <Box sx={{ mt: '100px', mb: '20px' }}>
                            <hr style={{ display: 'inline-block', width: '40%' }} /> <span>OR</span> <hr style={{ display: 'inline-block', width: '40%' }} />
                        </Box>
                        <Box>
                            <Typography sx={Styles.label}>Email</Typography>
                            <TextField id="outlined-basic" variant="outlined" type="text" sx={Styles.form} />

                            {!registered &&
                                <>
                                    <Typography sx={Styles.label}>Name</Typography>
                                    <TextField id="outlined-basic" variant="outlined" type="email" sx={Styles.form} />
                                </>
                            }
                            <Typography sx={Styles.label}>Password</Typography>
                            <TextField id="outlined-basic" variant="outlined" type='password' sx={Styles.form} />
                            <AuthenticationButton text={registered ? 'Log In' : 'Sign Up'} backgroundColor='#C63437' />
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '16px',
                                lineHeight: '71.5%',
                                textAlign: 'center',
                                color: '#494949',
                                pt: '10px'
                            }}>
                                {registered ? 'Need an account?' : 'Already Have Account?'} <Box component="span" onClick={registered ? () => setRegistered(false) : () => setRegistered(true)} sx={{ textDecoration: 'underline', cursor: 'pointer' }}>{registered ? 'Sign up.' : 'Sign In'}</Box>
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
};

export default LoginModal;