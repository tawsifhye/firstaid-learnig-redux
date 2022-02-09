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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Styles = {
    color: 'red',
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}
const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

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
                <Box>
                    <Content text="We are a company who is best known for offering awarding body accredited courses for anyone who wishes to take their professional life to the next level." />
                    {/* <Box>
                        <span className="slick-next "><ArrowRightAltIcon /></span>
                        <span className="slick-prev "></span>
                    </Box> */}
                </Box>

                <Box sx={{ backgroundColor: '#FEF9F7', mt: '30px', padding: '10px' }}>
                    <Slider {...settings}>
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