import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Content from './shared/Content';
import Tagline from './shared/Tagline'
const Courses = () => {
    useEffect(() => {
        fetch('courselist.json')
            .then(data => data.json())
            .then(data => console.log(data))
    }, [])
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
                </Box>
            </Container>
        </div>
    );
};

export default Courses;