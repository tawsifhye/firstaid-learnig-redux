import { Box, Container } from '@mui/material';
import React from 'react';
import Tagline from '../shared/Tagline';

const AboutCourse = ({ course }) => {
    return (
        <Box>
            <Container>
                <Tagline text={course.title} />
                <br /> <br />
                {course.overview}
            </Container>
        </Box>
    );
};

export default AboutCourse;