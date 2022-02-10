import React from 'react';
import { Box, Typography } from '@mui/material';
import TagLine from './Tagline';
import ArrowIcon from './ArrowIcon';

const Styles = {
    gridStyle: {
        backgroundColor: '#FFF6F6',
        position: 'relative',
        overflow: 'hidden',
        padding: '50px 20px',
    }

}

const SharedBox = ({ HeroLayout, HeroImgSrc, text, fontSize }) => {
    // console.log(src)
    return (
        <div>
            <Box sx={Styles.gridStyle}>
                {HeroLayout && <HeroLayout styling={{
                    bottom: '-103px',
                    right: '-127px',
                    fontSize: '35px'
                }} />}
                <img style={{
                    bottom: '-103px',
                    right: '-127px',
                    fontSize: '35px'
                }} src="" alt="" />
                <TagLine text={text} fontSize={fontSize} />

                <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>

                    <ArrowIcon />
                    <Typography sx={{
                        fontW: 600,
                        fontSize: '22px',
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
        </div>
    );
};

export default SharedBox;