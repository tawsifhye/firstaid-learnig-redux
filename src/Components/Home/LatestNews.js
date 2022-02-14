import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import Carousel from '../shared/Carousel';
import TagLine from '../shared/Tagline';
import '../GlobalCss.css';



const settings = {
    dotsClass: 'latest-news-dots',
    className: 'center',
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 500
};

const LatestNews = () => {
    const n = 5;
    return (
        <Box sx={{ backgroundColor: '#FFF6F6', padding: '50px 0' }} >
            <Typography sx={{ textAlign: 'center', padding: '50px 0' }} ><TagLine text='Our Latest News' /></Typography>
            <Container>

                {/* {[...Array(n)].map((elementInArray, index) => (

                    <Card sx={{ minWidth: 275 }} key={n}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day{index}
                            </Typography>
                            <Typography variant="h5" component="div">
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )
                )} */}
                <Box Box >
                    <Slider {...settings}>
                        {[...Array(n)].map((elementInArray, index) => (

                            <Card sx={{ minWidth: 275, marginRight: '20px', }} key={n}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day{index}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        )
                        )}
                    </Slider>
                </Box>



            </Container >
        </Box >
    );
};

export default LatestNews;