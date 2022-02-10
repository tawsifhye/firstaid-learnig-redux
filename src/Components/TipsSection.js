import { Box, Container } from '@mui/material';
import React from 'react';
import Carousel from './shared/Carousel';
import CarouselButton from './shared/CarouselButton';
import Content from './shared/Content';
import SharedBox from './shared/SharedBox';
import TagLine from './shared/Tagline';

const tipsData = [
    {
        id: "1",
        title: "Tips 2",
        img: "https://images.pexels.com/photos/5942997/pexels-photo-5942997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "2",
        title: "Tips 2",
        img: "https://images.pexels.com/photos/5942997/pexels-photo-5942997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "3",
        title: "Tips 3",
        img: "https://images.pexels.com/photos/5942997/pexels-photo-5942997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "4",
        title: "Tips 4",
        img: "https://images.pexels.com/photos/5942997/pexels-photo-5942997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "5",
        title: "Tips 5",
        img: "https://images.pexels.com/photos/5942997/pexels-photo-5942997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]


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
                    <Carousel sliderRef={sliderRef}
                        content={tipsData.map(data => (
                            <SharedBox key={data.id} course={data} />
                        ))}
                    />

                    {/* <SharedBox /> */}
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