import { Box, Container, Grid, } from '@mui/material';
import React from 'react';
import HeroLayout from '../shared/HeroLayout';
import PrimaryButton from '../shared/PrimaryButton';
import doctorImage from '../../images/doctors.png'
import first_aid_box from '../../images/first-aid-box.png'
import quiz_grid from '../../images/grid3.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Tagline from '../shared/Tagline';
import SharedBox from '../shared/SharedBox';
import { Link } from 'react-router-dom';
const Styles = {
    gridStyle: {
        backgroundColor: '#FFF6F6',
        position: 'relative',
        overflow: 'hidden',
        padding: '50px 20px',
    }

}


const Hero = () => {
    return (
        <div>
            <Container sx={{
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                }
            }}>

                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} >
                        <Grid item xs={12} lg={6} sx={{ ...Styles.gridStyle }}>
                            <Box sx={{ padding: '30px 10px' }}>
                                <HeroLayout styling={{
                                    bottom: '-111px',
                                    right: '-40px',
                                }}
                                />
                                <Tagline text={<div>Engaging & <br /> Accessible Online <br /> Course</div>} />
                            </Box>
                            <Box>
                                <img src={doctorImage} alt=""
                                    style={{
                                        width: '50%',
                                        position: 'absolute',
                                        bottom: '0',
                                        right: '0'
                                    }} />
                            </Box>

                            <PrimaryButton text='Explore Now' />

                        </Grid>
                        <Grid item xs={12} lg={6} >
                            <SharedBox HeroLayout={HeroLayout} HeroImgSrc={first_aid_box} text={<div>Trustable First Aid <br /> Courses Online</div>} fontSize='35px' />

                            <Box sx={{ mt: 3, ...Styles.gridStyle }}>
                                <HeroLayout styling={{
                                    bottom: '-103px',
                                    right: '-127px',
                                }}
                                />
                                <Tagline text={<div>Awesome Quizzes <br /> you can explore</div>} fontSize='35px' />
                                <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 2, }}>
                                    <Box sx={{

                                        position: 'absolute',
                                        top: '60px',
                                        right: {
                                            xs: '-20px',
                                            lg: '60px'
                                        },
                                    }}>
                                        <img src={quiz_grid} alt=""
                                            style={{
                                                width: '75%',


                                            }} />
                                    </Box>
                                    <Link to='/quiz' style={{
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        lineHeight: '36px',
                                        color: '#EA2E10',
                                        textDecoration: 'none',
                                        cursor: 'pointer'
                                    }}>
                                        Explore Now
                                    </Link>
                                    <ArrowRightAltIcon
                                        sx={{
                                            color: '#EA2E10',
                                            ml: 1
                                        }} />

                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


            </Container>
        </div >
    );
};

export default Hero;