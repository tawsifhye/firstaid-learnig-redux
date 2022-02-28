import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import TagLine from '../shared/Tagline';
import { HiPlusCircle } from "react-icons/hi"
import { AiOutlineClockCircle } from "react-icons/ai"
import { AiFillMinusCircle } from "react-icons/ai"

const modules = [
    {
        id: "1",
        name: "Module 1",
        video: [
            {
                id: "1",
                name: 'Video 1'
            },
            {
                id: "2",
                name: "Video 2"
            },
            {
                id: "3",
                name: "Video 3"
            },
        ]
    },
    {
        id: "2",
        name: "Module 2",
        video: [
            {
                id: "1",
                name: 'Video 1'
            },
            {
                id: "2",
                name: "Video 2"
            },
            {
                id: "3",
                name: "Video 3"
            },
        ]
    },
    {
        id: "3",
        name: "Module 3",
        video: [
            {
                id: "1",
                name: 'Video 1'
            },
            {
                id: "2",
                name: "Video 2"
            },
            {
                id: "3",
                name: "Video 3"
            },
        ]
    },
    {
        id: "4",
        name: "Module 4",
        video: [
            {
                id: "1",
                name: 'Video 1'
            },
            {
                id: "2",
                name: "Video 2"
            },
            {
                id: "3",
                name: "Video 3"
            },
        ]
    },
    {
        id: "5",
        name: "Module 5",
        video: [
            {
                id: "1",
                name: 'Video 1'
            },
            {
                id: "2",
                name: "Video 2"
            },
            {
                id: "3",
                name: "Video 3"
            },
        ]
    },
]

const Curriculam = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <Box id='curriculam' sx={{ mb: 4 }}>
                <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>
                    <TagLine text="Course Curriculam" />
                    {
                        modules.map((element, index) => (
                            <>
                                <Box key={element.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: { lg: '50%' }, borderBottom: '1px solid #DFDFDF' }}>

                                    <Typography sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                                        {!open && <HiPlusCircle style={{ fontSize: '25px', color: '#ED3B45', mr: 3 }} onClick={() => setOpen(true)} />}
                                        {open && <AiFillMinusCircle style={{ fontSize: '25px', color: '#ED3B45', mr: 3 }} onClick={() => setOpen(false)} />}
                                        {element.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                        <AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                        35.00 min
                                    </Box>

                                    <br /> <br />
                                </Box>
                                {/* <Box sx={{ transition: '1s' }}>
                                    {open &&
                                        <>
                                            {element.video.map((video) => (
                                                <Typography key={video.id}>{video.name}</Typography>
                                            ))}
                                        </>
                                    }
                                </Box> */}
                            </>
                        ))
                    }
                </Container>
            </Box>
        </>

    );
};

export default Curriculam;