import React from 'react';
import { Box, Typography } from '@mui/material';
import TagLine from './Tagline';
import ArrowIcon from './ArrowIcon';



const SharedBox = ({ HeroLayout, HeroImgSrc, text, fontSize, tips }) => {
    const Styles = {
        gridStyle: {
            backgroundColor: '#FFF6F6',
            position: 'relative',
            overflow: 'hidden',
            padding: '50px 20px',
            px: tips && '10px',
            mr: 2
        }

    }


    // console.log(tips?.title)
    return (

        <Box sx={Styles.gridStyle}>
            {HeroLayout && <HeroLayout styling={{
                bottom: '-103px',
                right: '-127px',
                fontSize: '35px'
            }} />}



            {tips && <Box
                component="img"
                sx={{
                    top: '-80px',
                    right: {
                        xs: '-180px',
                        lg: '-180px',
                        xl: '-250px'
                    },
                    width: '100%',
                    position: 'absolute',
                    height: '400px',
                    borderRadius: '50%',
                }}
                src={tips?.img}
            />}


            <TagLine text={text} fontSize={fontSize} />



            <Typography sx={{ width: '50%' }}><TagLine text={tips?.title} fontSize='18px' /></Typography>

            <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 1, width: '50%' }}>
                <ArrowIcon />
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: (tips && '18px') || '22px',
                    lineHeight: '36px',
                    color: '#272D4E'
                }}>
                    Watch Promo
                </Typography>
            </Box>

            {HeroImgSrc && <Box sx={{
                position: 'absolute',
                top: '60px',
                right: {
                    xs: '-20px',
                    lg: '60px'
                },
            }}>
                <img src={HeroImgSrc} alt=""
                    style={{
                        width: '75%',
                    }} />
            </Box>}

        </Box>
    );
};

export default SharedBox;