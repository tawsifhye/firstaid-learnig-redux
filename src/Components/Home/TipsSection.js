import { Box, Container } from '@mui/material';
import React from 'react';
import Carousel from '../shared/Carousel';
import CarouselButton from '../shared/CarouselButton';
import Content from '../shared/Content';
import SharedBox from '../shared/SharedBox';
import TagLine from '../shared/Tagline';

const tipsData = [
    {
        id: "1",
        title: "Trustable First Aid Courses Online 1",
        img: "https://images.pexels.com/photos/5905479/pexels-photo-5905479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "2",
        title: "Trustable First Aid Courses Online 2",
        img: "https://images.pexels.com/photos/5905479/pexels-photo-5905479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "3",
        title: "Trustable First Aid Courses Online 3",
        img: "https://images.pexels.com/photos/5905479/pexels-photo-5905479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "4",
        title: "Trustable First Aid Courses Online 4",
        img: "https://images.pexels.com/photos/5905479/pexels-photo-5905479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: "5",
        title: "Trustable First Aid Courses Online 5",
        img: "https://images.pexels.com/photos/5905479/pexels-photo-5905479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                <TagLine text={<div>Helpful Tips & Tricks to Learn</div>} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Content text={<div>We are a company who is best known for offering awarding body accredited courses for anyone who wishes to <br /> take their professional life to the next level.</div>} />
                    <Box >
                        <CarouselButton sliderRef={sliderRef} />
                    </Box>
                </Box>

                <Box sx={{ mt: '30px', padding: '10px' }}>
                    <Carousel sliderRef={sliderRef} slidesToShow={3} slidesToScroll={3}
                        content={tipsData.map(data => (
                            <SharedBox key={data.id} tips={data} />
                        ))}
                    />
                </Box>


            </Container>
        </div>
    );
};

export default TipsSection;