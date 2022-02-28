import { Box, Container } from '@mui/material';
import React from 'react';
import Tagline from '../shared/Tagline';

const AboutCourse = ({ course }) => {
    return (
        <Box id='overview'>
            <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' }, mb: 20 }}>
                <Tagline text={course?.title} />
                <br /> <br />
                {course?.overview}
            </Container>
        </Box>
    );
};

export default AboutCourse;