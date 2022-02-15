import { Box, Container, Grid, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { FaStar } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import PrimaryButton from '../shared/PrimaryButton';

const Styles = {
    gridStyle: {
        display: 'flex',
    },
    icon: {
        fontSize: '50px',
        marginRight: '5px'
    },
    facilitiesTitle: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '26px',
        color: 'rgba(26, 60, 85, 0.9)'
    },
    facilitiesText: {
        fontSize: '16px',
        lineHeight: '26px',
        color: 'rgba(76, 112, 138, 0.9)'
    }

}


const CourseOverviewBanner = ({ course }) => {
    console.log(course)
    return (
        <Box>
            <Box>
                <Box sx={{ backgroundColor: '#4F303B', color: 'white', py: 5 }}>
                    <Container>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: '36px',
                                    lineHeight: '145%',
                                    letterSpacing: '1.2px'
                                }}>{course?.title}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                    {course?.rating}
                                    <FaStar style={{
                                        color: '#FFB300'
                                    }} />
                                    <Typography sx={{ ml: 2 }}>
                                        {course?.enrolledStudents} STUDENTS
                                    </Typography>
                                </Box>
                                <Typography>We are a company who is best known for offering awarding body accredited courses for anyone who wishes to take their professional life to the next level.</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>

                            </Grid>
                        </Grid>

                    </Container>
                </Box>
                <Box sx={{ backgroundColor: '#FFF6F6', py: 5 }}>
                    <Container>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={2} sm={4} md={4} sx={Styles.gridStyle}>
                                <Box>
                                    <GrCertificate style={Styles.icon} />
                                </Box>
                                <Box>
                                    <Typography sx={Styles.facilitiesTitle}>
                                        You will Get
                                    </Typography>
                                    <Typography sx={Styles.facilitiesText}>
                                        Certificate of Completion
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4} sx={Styles.gridStyle}>
                                <Box>
                                    <GrCertificate style={Styles.icon} />
                                </Box>
                                <Box>
                                    <Typography sx={Styles.facilitiesTitle}>
                                        You will Get
                                    </Typography>
                                    <Typography sx={Styles.facilitiesText}>
                                        Certificate of Completion
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4} sx={Styles.gridStyle}>
                                <Box component='img' src={course?.coverImage} sx={{
                                    width: '100%',
                                    marginTop: {
                                        xs: '0',
                                        md: '-200px'
                                    }
                                }} />
                            </Grid>
                            <Grid item xs={2} sm={4} md={4} sx={Styles.gridStyle}>
                                <Box>
                                    <GrCertificate style={Styles.icon} />
                                </Box>
                                <Box>
                                    <Typography sx={Styles.facilitiesTitle}>
                                        You will Get
                                    </Typography>
                                    <Typography sx={Styles.facilitiesText}>
                                        Certificate of Completion
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4} sx={Styles.gridStyle}>
                                <Box>
                                    <GrCertificate style={Styles.icon} />
                                </Box>
                                <Box>
                                    <Typography sx={Styles.facilitiesTitle}>
                                        You will Get
                                    </Typography>
                                    <Typography sx={Styles.facilitiesText}>
                                        Certificate of Completion
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4} sx={{ ...Styles.gridStyle, justifyContent: 'space-around' }}>
                                <Box>
                                    <Typography sx={{
                                        fonWeight: 500,
                                        fontSize: '26.88px',
                                        lineHeight: '115.4%',
                                        alignItems: 'center',
                                        textDecorationLine: 'line-through',
                                        color: '#595959'
                                    }}>
                                        ${course?.regularPrice}
                                    </Typography>
                                    <Typography sx={{ color: '#EA2E10' }}>75% off</Typography>
                                </Box>
                                <Typography sx={{ color: '#EA2E10', fontWeight: 'bold', fontSize: '40px' }}>${parseFloat(course?.regularPrice - course?.regularPrice * .75).toFixed(2)}</Typography>
                                <PrimaryButton text="Buy Now" />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Box >
    );
};

export default CourseOverviewBanner;