import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Content from './shared/Content';
import Tagline from './shared/Tagline'
const Courses = () => {
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: '50px' }}>
                <Tagline text={<div>Interacting First Aid Courses</div>} />
                <Box>
                    <Content text="We are a company who is best known for offering awarding body accredited courses for anyone who wishes to take their professional life to the next level." />
                </Box>
            </Container>
        </div>
    );
};

export default Courses;