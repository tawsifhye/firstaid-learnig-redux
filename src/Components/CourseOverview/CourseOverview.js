
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AboutCourse from './AboutCourse';
import CourseCertificate from './CourseCertificate';
import CourseIndex from './CourseIndex';
import CourseOverviewBanner from './CourseOverviewBanner';
import Curriculam from './Curriculam';

const CourseOverview = () => {
    const courses = useSelector(state => state.courses);
    const { id } = useParams();
    const [singleCourse, setSingleCourse] = useState({});

    useEffect(() => {
        const selectedCourse = courses.find(course => course.id === id)
        setSingleCourse(selectedCourse);
    }, [courses, id])

    return (
        <Box >
            <CourseOverviewBanner course={singleCourse} />
            <CourseIndex />
            <AboutCourse course={singleCourse} />
            <Curriculam />
            <CourseCertificate />
        </Box>
    );
};

export default CourseOverview;