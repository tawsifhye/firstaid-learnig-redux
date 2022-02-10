import { Box, Container } from '@mui/material';
import React from 'react';
import Carousel from './shared/Carousel';
import CarouselButton from './shared/CarouselButton';
import Content from './shared/Content';
import TagLine from './shared/Tagline';

const TipsSection = () => {
    const sliderRef = React.useRef(null);
    return (
        <div>
            <Container sx={{
                mt: '50px',
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                }
            }}>
                <TagLine text={<div>Helful Tips & Tricks to Learn</div>} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Content text={<div>We are a company who is best known for offering awarding body accredited courses for anyone who wishes to <br /> take their professional life to the next level.</div>} />
                    <Box >
                        <CarouselButton sliderRef={sliderRef} />
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: '#FEF9F7', mt: '30px', padding: '10px' }}>
                    {/* <Carousel sliderRef={sliderRef}
                        content={courseList.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    /> */}


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

export default TipsSection;