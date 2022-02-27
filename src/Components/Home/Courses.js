import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useRef } from 'react';
import CourseCard from './CourseCard';
import Carousel from '../shared/Carousel';
import CarouselButton from '../shared/CarouselButton';
import Content from '../shared/Content';
import Tagline from '../shared/Tagline'
import { DataContext } from '../../Context/DataProvider';



const Courses = () => {
    const contextData = useContext(DataContext);
    const { dataContext } = contextData;
    const { courses } = dataContext;
    const sliderRef = useRef(null);

    // console.log(courseList);
    return (
        <div>
            <Container sx={{
                mt: '50px',
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                }
            }}>
                <Tagline text={<div>Interacting First Aid Courses</div>} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Content text={<div>We are a company who is best known for offering awarding body accredited courses for anyone who wishes to <br /> take their professional life to the next level.</div>} />
                    <Box >
                        <CarouselButton sliderRef={sliderRef} />
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: '#FEF9F7', mt: '30px', padding: '10px' }}>
                    <Carousel sliderRef={sliderRef}
                        content={courses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    />
                </Box>


            </Container>
        </div>
    );
};

export default Courses;