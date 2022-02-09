import { Box } from '@mui/system';
import React from 'react';
import TagLine from './shared/Tagline';

const CourseCard = () => {
    return (
        <Box sx={{
            mt: '30px',
            background: '#FFFFFF',
            boxShadow: '0px 45.799px 106.864px rgba(234, 46, 16, 0.06)',
            borderRadius: '19.0829px'
        }}>
            <img src="" alt="" />
            <TagLine text={<div>Online Microsoft Excel Certification Bundles</div>} fontSize="30.2554px" />
        </Box>
    );
};

export default CourseCard;