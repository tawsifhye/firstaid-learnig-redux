import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import Tagline from './shared/Tagline';
import Content from './shared/Content';
import CourseCard from './CourseCard';



const FreeResources = () => {

    const [freeResources, setFreeResources] = useState([]);
    useEffect(() => {
        fetch('freeresources.json')
            .then(res => res.json())
            .then(data => setFreeResources(data))
    }, [])

    return (
        <Box sx={{ mt: '20px', backgroundColor: '#FFF6F6', padding: '30px 10px' }}>
            <Container sx={{
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                },
                textAlign: 'center'
            }}>
                <Tagline text={<div>Free Resources You’ll Enjoy</div>} />
                <br />
                <Content text={<div>We are a company who is best known for offering awarding body accredited courses for anyone who wishes to <br /> take their professional life to the next level.</div>} />
                <Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FreeResources;