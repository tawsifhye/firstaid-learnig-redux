import { Container } from '@mui/material';
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import '../GlobalCss.css'

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
                <li style={Style.li}>
                    <NavHashLink className='course-index-link' to="#overview"
                    >
                        Overview
                    </NavHashLink>
                </li>
                <li style={Style.li}>
                    <NavHashLink className='course-index-link' to="#curriculam"
                    >
                        Curriculam
                    </NavHashLink>
                </li>
                <li style={Style.li}>
                    <NavHashLink className='course-index-link' to="#certificate"
                    >
                        Assesment & Certification
                    </NavHashLink>
                </li>
                <li style={Style.li}>Reviews</li>
                <li style={Style.li}>FAQs</li>
            </ul>
        </Container >
    );
};

export default CourseIndex;