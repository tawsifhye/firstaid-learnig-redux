import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useContext } from "react";
import { DataContext } from './Context/DataProvider';
import CourseCard from './CourseCard';
import Content from './shared/Content';
import Tagline from './shared/Tagline'
const Courses = () => {

    const [courseList, setCourseList] = useContext(DataContext)
    useEffect(() => {
        fetch('courselist.json')
            .then(data => data.json())
            .then(data => setCourseList(data))
    }, []);
    console.log(courseList);
    return (
        <div>
            <Container sx={{
                mt: '50px',
                backgroundColor: '#E5E5E5',
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                }
            }}>
                <Tagline text={<div>Interacting First Aid Courses</div>} />
                <Box>
                    <Content text="We are a company who is best known for offering awarding body accredited courses for anyone who wishes to take their professional life to the next level." />
                </Box>
                <CourseCard />
            </Container>
        </div>
    );
};

export default Courses;