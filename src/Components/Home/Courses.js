import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useContext } from "react";
import { DataContext } from '../../Context/DataProvider';
// import '../Components/GlobalCss.css'
import CourseCard from './CourseCard';
import Carousel from '../shared/Carousel';
import CarouselButton from '../shared/CarouselButton';
import Content from '../shared/Content';
import Tagline from '../shared/Tagline'



const Courses = () => {
    const sliderRef = React.useRef(null);
    const [courseList, setCourseList] = useContext(DataContext);
    useEffect(() => {
        fetch('/courselist.json')
            .then(data => data.json())
            .then(data => setCourseList(data))
    }, []);
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
                        content={courseList.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    />


                    {/* <Slider ref={slider} {...settings}>
                        {courseList.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </Slider> */}
                </Box>


            </Container>
        </div>
    );
};

export default Courses;