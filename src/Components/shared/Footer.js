import { Box, Container, Grid, Link, TextField, Typography } from '@mui/material';

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import PrimaryButton from './PrimaryButton';
import { useTheme } from '@mui/system';


const Style = {
    gridStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'space-around',
        flexDirection: 'column',
    },
    icon: {
        padding: '20px',
        borderRadius: '50%',
        backgroundColor: '#463131',
        fontSize: '20px',
        marginRight: '5px'
    },
    linkTitle: {
        fonWeight: 900,
        fontSize: '22px',
        linHeight: '28px',
        marginBottom: '35px'
    },
    links: {
        fontSize: '18px',
        lineHeight: '149.7 %',
        textDecoration: 'none',
        color: 'white',
        textAlign: 'left',

    }
}

const Footer = () => {
    const theme = useTheme();

    const useStyle = makeStyles({
        placeHolder: {
            'input': {
                '&::placeholder': {
                    color: '#BFBFBF !important'
                }
            }

        }
    })

    return (
        <Box sx={{ backgroundColor: '#291F1F', color: 'white' }}>
            <Container sx={{ xl: 'xl', lg: 'lg' }}>

                <Grid container spacing={{ xs: 2, md: 3 }} >

                    <Grid item xs={12} sm={6} md={3} sx={Style.gridStyle}>
                        <Typography sx={{
                            fontWeight: 800,
                            fontSize: '64.3125px',
                            lineHeight: '49px',
                        }} >
                            LOGO
                        </Typography>
                        <Typography sx={{
                            fontSize: '18px',
                            lineHeight: '29px',
                            my: 2
                        }}>
                            Beaufort House, 15 St Botolph Street, London EC3A 7BB
                        </Typography>

                        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                            <span style={Style.icon}> <FaFacebookF /></span>
                            <span style={Style.icon}> <FaLinkedinIn /></span>
                            <span style={Style.icon}> <FaTwitter /></span>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={Style.gridStyle}>
                        <Typography sx={Style.linkTitle}>Help Links</Typography>
                        <Link sx={Style.links}>
                            Home
                        </Link>
                        <Link sx={Style.links}>
                            About
                        </Link>
                        <Link sx={Style.links}>
                            All Courses
                        </Link>
                        <Link sx={Style.links}>
                            Events
                        </Link>
                        <Link sx={Style.links}>
                            Terms of use
                        </Link>
                        <Link sx={Style.links}>
                            Contact
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={Style.gridStyle}>
                        <Typography sx={Style.linkTitle}>Free Resources</Typography>
                        <Link sx={Style.links}>
                            CV Template
                        </Link>
                        <Link sx={Style.links}>
                            Free Courses
                        </Link>
                        <Link sx={Style.links}>
                            Free Quizes
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={Style.gridStyle}>
                        <Typography sx={Style.linkTitle}>Contact Us</Typography>
                        <TextField className={useStyle.placeHolder} sx={{
                            mb: 3,
                            border: '2px solid #C5C5C5',
                            boxSizing: 'border-box',
                            borderRadius: '8px',

                        }} fullWidth placeholder="Enter Your Number" id="fullWidth" />
                        <PrimaryButton text='Request a Callback' />
                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
};

export default Footer;