import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { FaStar } from "react-icons/fa";


const CourseOverviewBanner = ({ course }) => {
    console.log(course)
    return (
        <Box>
            <Box>
                <Box sx={{ backgroundColor: '#4F303B', color: 'white', py: 5 }}>
                    <Container>
                        <Typography sx={{
                            fontWeight: 500,
                            fontSize: '36px',
                            lineHeight: '145%',
                            letterSpacing: '1.2px'
                        }}>{course?.title}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                            {course.rating}
                            <FaStar style={{
                                color: '#FFB300'
                            }} />
                            <Typography sx={{ ml: 2 }}>
                                {course.enrolledStudents} STUDENTS
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box >
    );
};

export default CourseOverviewBanner;