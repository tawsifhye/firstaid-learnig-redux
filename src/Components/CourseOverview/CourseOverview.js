import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import AboutCourse from './AboutCourse';
import CourseOverviewBanner from './CourseOverviewBanner';

const CourseOverview = () => {
    const { id } = useParams();
    const [courseList, setCourseList] = useState([]);
    const [singleCourse, setSingleCourse] = useState({});

    useEffect(() => {
        fetch('/courselist.json')
            .then(res => res.json())
            .then(data => setCourseList(data))
    }, [])

    useEffect(() => {
        const selectedCourse = courseList.find(course => course.id === id)
        setSingleCourse(selectedCourse);
    }, [courseList, id])

    return (
        <Box>
            <Navbar />
            <CourseOverviewBanner course={singleCourse} />
            <AboutCourse course={singleCourse} />


            {/* <Footer /> */}
        </Box>
    );
};

export default CourseOverview;