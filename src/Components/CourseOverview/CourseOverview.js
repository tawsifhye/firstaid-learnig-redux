import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import AboutCourse from './AboutCourse';
import CourseIndex from './CourseIndex';
import CourseOverviewBanner from './CourseOverviewBanner';

const CourseOverview = () => {
    const contextData = useContext(DataContext);
    const { dataContext, dispatch } = contextData;
    const { courses } = dataContext;
    console.log(dataContext);
    const { id } = useParams();
    const [singleCourse, setSingleCourse] = useState({});

    useEffect(() => {
        const selectedCourse = courses.find(course => course.id === id)
        setSingleCourse(selectedCourse);
    }, [courses, id])

    console.log(singleCourse)
    return (
        <Box >
            <Navbar />
            <CourseOverviewBanner course={singleCourse} />
            <CourseIndex />
            <AboutCourse course={singleCourse} />
            <Footer />
        </Box>
    );
};

export default CourseOverview;