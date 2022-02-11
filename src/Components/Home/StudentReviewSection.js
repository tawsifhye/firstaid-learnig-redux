import { Avatar, Box, Card, Container, Typography } from '@mui/material';
import React from 'react';
import Tagline from '../shared/Tagline';
import quote from '../../images/quote.png'
import dot_bg from '../../images/dot-bg.png'
import Content from '../shared/Content';
import Carousel from '../shared/Carousel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const reviews = [
    {
        id: "1",
        review: "Whenever I think of quality education now, I think of them instantly. I’ve done so many courses in my free time and learned so much! Thank you, for redefining online education for me!",
        name: "Ellison Morkel"
    },
    {
        id: "2",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero recusandae unde labore numquam at optio deleniti. Dicta, modi cum!",
        name: "Morne Morkel"
    },
    {
        id: "3",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae, nulla praesentium tenetur neque assumenda ex harum repellat eius facere id laudantium necessitatibus laboriosam nemo!",
        name: "Jhon Doe"
    },
]

const StudentReviewSection = () => {

    const sliderRef = React.useRef(null);
    return (
        <Box
            sx={{
                mt: '50px',
                position: 'relative',
                background: 'linear-gradient(180deg, rgba(255, 246, 246, 0) 0%, rgba(255, 246, 246, 0.8) 75.15%)',
            }}
        >
            <Typography textAlign="center"> <Tagline text={<div>We Value Our Students, <br />Let’s Hear from them</div>} /> </Typography>


            <Container position='relative'>

                <Box sx={{ mx: 'auto', textAlign: 'center', padding: '20px 10px', position: 'relative', }}>

                    <Box sx={{ position: 'relative' }}>
                        <Carousel sliderRef={sliderRef} slidesToShow={1} slidesToScroll={1}

                            content={reviews.map(data => (
                                <Card id={data.id} sx={{
                                    maxWidth: 400,
                                    minWidth: 100,
                                    boxShadow: '0px 18px 52.8537px rgba(234, 46, 16, 0.09)',
                                    borderRadius: '20px',
                                    padding: '50px',
                                    backgroundImage: `url(${quote})`,
                                    backgroundSize: '25%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    marginTop: '50px',
                                    zIndex: 100,
                                    marginRight: {
                                        xs: '300px',
                                        sm: '300px',
                                        md: '0'
                                    }
                                }}>
                                    <br /> <br />
                                    <Typography style={{ width: '100%' }}><Content text={data.review} fontSize='20px' /></Typography>
                                    <br />
                                    <Typography> <span>- </span> <span><Tagline text={data.name} fontSize='20px' /></span></Typography>
                                </Card>
                            ))
                            }
                        />

                        <Avatar sx={{
                            width: '136px',
                            height: '136px',
                            position: 'absolute',
                            top: '-50px',
                            left: '130px',
                            display: {
                                xs: 'none',
                                lg: 'inline-block'
                            }
                        }}
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                        <Avatar sx={{
                            width: '93px',
                            height: '93px',
                            position: 'absolute',
                            top: '150px',
                            left: '-30px',
                            display: {
                                xs: 'none',
                                lg: 'inline-block'
                            }
                        }}
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                        <Avatar sx={{
                            width: '105px',
                            height: '105px',
                            position: 'absolute',
                            top: '330px',
                            left: '70px',
                            display: {
                                xs: 'none',
                                lg: 'inline-block'
                            }
                        }}
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                        <Avatar sx={{
                            width: '94px',
                            height: '94px',
                            position: 'absolute',
                            top: '-50px',
                            right: '130px',
                            display: {
                                xs: 'none',
                                lg: 'inline-block'
                            }
                        }}
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                        <Avatar sx={{
                            width: '154px',
                            height: '154px',
                            position: 'absolute',
                            top: '110px',
                            right: '-30px',
                            display: {
                                xs: 'none',
                                lg: 'inline-block'
                            }
                        }}
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                        <Avatar sx={{
                            width: '89px',
                            height: '89px',
                            position: 'absolute',
                            top: '330px',
                            right: '70px',
                            display: {
                                xs: 'none',
                                lg: 'inline-block'
                            }
                        }}
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </Box>



                    <ArrowRightAltIcon sx={{
                        transform: 'rotate(180deg)',
                        color: '#B3AEAE',
                        fontSize: '40px',
                        '&:active': {
                            color: '#EA2E10',
                            transform: 'rotate(180deg) scaleX(1.5)'
                        }
                    }}
                        onClick={() => sliderRef?.current?.slickPrev()}
                    />
                    <ArrowRightAltIcon sx={{
                        color: '#B3AEAE',
                        fontSize: '40px',
                        '&:active': {
                            color: '#EA2E10',
                            transform: 'scaleX(1.5)'
                        }
                    }}
                        onClick={() => sliderRef?.current?.slickNext()}
                    />

                    <Box
                        component="img"
                        sx={{
                            bottom: '50px',
                            left: '170px',
                            width: '200px',
                            display: {
                                xs: 'none',
                                md: 'block'
                            },
                            position: 'absolute',
                            zIndex: -1
                        }}
                        src={dot_bg}
                    />
                    <Box
                        component="img"
                        sx={{
                            top: '90px',
                            right: '190px',
                            width: '200px',
                            position: 'absolute',
                            display: {
                                xs: 'none',
                                md: 'block'
                            },
                            zIndex: -1
                        }}
                        src={dot_bg}
                    />
                </Box>


            </Container>
        </Box>
    );
};

export default StudentReviewSection;