import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const ArrowIcon = () => {
    return (
        <div>
            <PlayArrowIcon
                sx={{
                    color: '#EA2E10',
                    backgroundColor: 'rgba(234, 46, 16, 0.1)',
                    padding: 1,
                    borderRadius: '50%',
                    mr: 1

                }} />
        </div>
    );
};

export default ArrowIcon;