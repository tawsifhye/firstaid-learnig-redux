import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useContext } from "react";
import Slider from 'react-slick';
import { DataContext } from './Context/DataProvider';
// import '../Components/GlobalCss.css'
import CourseCard from './CourseCard';
import Content from './shared/Content';
import Tagline from './shared/Tagline'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Styles = {
    nextPrev: {
        background: '#FFF1EF',
        borderRadius: '6px',
        padding: '20px',
        color: '#EA2E10',
        '&:active': {
            color: '#FFFFFF',
            background: '#EA2E10'
        }
    }
}

const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const Courses = () => {

    const slider = React.useRef(null);

    const [courseList, setCourseList] = useContext(DataContext)
    useEffect(() => {
        fetch('courselist.json')
            .then(data => data.json())
            .then(data => setCourseList(data))
    }, []);
    console.log(courseList);
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Content text={<div>We are a company who is best known for offering awarding body accredited courses for anyone who wishes to <br /> take their professional life to the next level.</div>} />
                    <Box >
                        {/* <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
                        <button onClick={() => slider?.current?.slickNext()}>Next</button> */}
                        <ArrowBackIcon sx={{ ...Styles.nextPrev, mr: '10px' }} onClick={() => slider?.current?.slickPrev()} />
                        <ArrowForwardIcon sx={Styles.nextPrev} onClick={() => slider?.current?.slickNext()} />
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: '#FEF9F7', mt: '30px', padding: '10px' }}>
                    <Slider ref={slider} {...settings}>
                        {courseList.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </Slider>
                </Box>


            </Container>
        </div>
    );
};

export default Courses;