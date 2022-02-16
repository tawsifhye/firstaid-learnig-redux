import { Box } from '@mui/system';
import React, { useContext } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TagLine from '../shared/Tagline';
import { Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
const CourseCard = ({ course }) => {
    const { id, title, coverImage, enrolledStudents, rating, } = course;
    const [cart, setCart] = useContext(DataContext);
    console.log(cart);


    const handleAddToCart = (course) => {
        const added = cart.find((item) => (item.id === course.id))
        if (added) {
            added.quantity = added.quantity + 1
        }
        else {
            course = {
                ...course,
                quantity: 1
            }
            const newCart = [...cart, course];
            setCart(newCart);
        }
        console.log(cart);
    }
    return (
        <Box sx={{
            my: '30px',
            mr: '10px',
            padding: '10px',
            background: '#FFFFFF',
            boxShadow: '0px 45.799px 106.864px rgba(234, 46, 16, 0.06)',
            borderRadius: '19.0829px'
        }}>

            <Box position='relative'>
                <Typography sx={{
                    padding: '5px 10px',
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '6.36097px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <StarIcon sx={{ color: '#FFCB00' }} />
                    <TagLine text={rating} fontSize='15px' fontWeight={500} />
                </Typography>
                <img style={{ width: '100%', marginBottom: '10px', borderRadius: '19.08px' }} src={coverImage} alt="" />
            </Box>
            <Link to={`/courseoverview/${id}`} sx={{ cursor: 'pointer' }}>
                <TagLine text={<div>{title}</div>} fontSize="20px" />
            </Link>


            <Box sx={{
                mt: '30px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <PeopleIcon sx={{ mr: 1, color: '#EA2E10' }} />
                    <span style={{ color: '#435770' }}>{enrolledStudents}</span>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <MilitaryTechIcon sx={{ mr: 1, color: '#EA2E10' }} />
                    <span style={{ color: '#435770' }}>CPD Accrediated</span>
                </Box>
            </Box>

            <Button variant="outlined" sx={{
                width: '100%',
                mt: '50px',
                border: '2.54439px solid rgba(234, 46, 16, 0.2)',
                color: '#EA2E10',
                fontWeight: 600,
            }}
                onClick={() => handleAddToCart(course)}
            >
                <ShoppingCartIcon />
                Add to Cart
            </Button>
        </Box>
    );
};

export default CourseCard;