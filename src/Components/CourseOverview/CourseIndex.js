import { Container } from '@mui/material';
import React from 'react';


const Style = {
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        padding: '0 5px'
    },
    li: {
        fontWeight: 500
    }
}

const CourseIndex = () => {
    return (
        <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
            <ul style={Style.ul}>
                <li style={Style.li}>Overview</li>
                <li style={Style.li}>Curriculam</li>
                <li style={Style.li}>Assesment & Certification</li>
                <li style={Style.li}>Reviews</li>
                <li style={Style.li}>FAQs</li>
            </ul>
        </Container>
    );
};

export default CourseIndex;