import { Box, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AuthenticationButton from '../shared/AuthenticationButton';
import google_icon from '../../images/google-icon.png';
import facebook_icon from '../../images/facebook-icon.png';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../hooks/useAuth';

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
    const { handleGoogleSignIn } = useAuth();
    const [isFunction, setFunction] = useState(false);
    // console.log(handleGoogleSignIn);
    // console.log(typeof (handleGoogleSignIn))

    useEffect(() => {
        if (typeof (handleGoogleSignIn) === 'function') {
            setFunction(true);
        }
    }, [handleGoogleSignIn])

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
                        {isFunction &&
                            <AuthenticationButton onClick={handleGoogleSignIn} text='Log In With Google' backgroundColor='#4688F1' icon={google_icon} />
                        }

                        <AuthenticationButton text='Log In With Facebook' backgroundColor='#3E5C97' icon={facebook_icon} />
                        <Box sx={{ mt: '100px', mb: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <hr style={{ width: '40%' }} /> <span style={{
                                fontWeight: 600,
                                fontSize: '12px',
                                texAlign: 'center',
                                textTransform: 'uppercase',
                                color: '#767676'
                            }}>OR</span> <hr style={{ width: '40%' }} />
                        </Box>
                        <Box>
                            <Typography sx={Styles.label}>Email</Typography>
                            <TextField id="outlined-basic" variant="outlined" type="text" sx={Styles.form} />

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

                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: '12px',
                                textAlign: 'center',
                                textDecoration: 'underline',
                                color: '#767676',
                                mt: '10px'
                            }}>
                                Forgot your password?
                            </Typography>
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: '12px',
                                textAlign: 'center',
                                color: '#767676',
                                mt: '10px'
                            }}>
                                By logging in, you agree to our
                            </Typography>
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: '12px',
                                textAlign: 'center',
                                textDecoration: 'underline',
                                color: '#767676',
                                mt: '10px'
                            }}>
                                Privacy Policy <span style={{ textDecoration: 'none' }}>and</span> Terms od Service.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </div >
    );
};

export default LoginModal;