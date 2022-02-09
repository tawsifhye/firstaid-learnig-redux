
import { Box, Grid, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import React from 'react';
import doctorImage from '../../images/doctors.png'

const HeroLayout = ({ position, text }) => {
    console.log();
    return (
        // backgroundColor: '#FFF6F6'
        <div>

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={6} sx={{ backgroundColor: '#FFF6F6', position: 'relative', overflow: 'hidden' }}>

                        <Typography
                            sx={{
                                fontFamily: 'Circular Std',
                                fontStyle: 'normal',
                                fontWeight: 900,
                                fontSize: '55px',
                                lineHeight: '125%',
                                color: '#272D4E',
                                whiteSpace: 'pre-line'
                            }}>
                            {text}
                        </Typography>
                        <Box
                            sx={{
                                width: '350px',
                                height: '350px',
                                backgroundColor: '#FFE4E0',
                                borderRadius: '50%',
                                position: 'absolute',
                                bottom: position.bottom,
                                right: position.right,

                            }}
                        >
                            <img src={doctorImage} alt=""
                                style={{
                                    width: '80%',
                                    position: 'absolute',
                                    bottom: '91px',
                                    right: '40px'
                                }} />

                        </Box>


                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ backgroundColor: '#FFF6F6', }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate dolor dolores molestiae dignissimos quaerat quod mollitia porro architecto, voluptates eligendi temporibus consectetur, iusto officiis itaque! A deserunt quisquam eligendi ipsa sapiente ullam eveniet hic ipsam velit? Est non deserunt natus voluptatum ex veniam vero nam corporis dolorum eligendi id, soluta similique. Doloremque facilis a dolore quidem aperiam vero perspiciatis est enim veniam laudantium, expedita velit necessitatibus quaerat, obcaecati voluptate eveniet debitis aut sapiente, reprehenderit ratione esse nostrum voluptas itaque. Beatae corrupti cum voluptatum, asperiores officia corporis praesentium neque at distinctio. Provident incidunt, molestiae illo necessitatibus explicabo vitae quo error.</Box>
                        <Box sx={{ mt: 3, backgroundColor: '#FFF6F6', }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptate dolor dolores molestiae dignissimos quaerat quod mollitia porro architecto, voluptates eligendi temporibus consectetur, iusto officiis itaque! A deserunt quisquam eligendi ipsa sapiente ullam eveniet hic ipsam velit? Est non deserunt natus voluptatum ex veniam vero nam corporis dolorum eligendi id, soluta similique. Doloremque facilis a dolore quidem aperiam vero perspiciatis est enim veniam laudantium, expedita velit necessitatibus quaerat, obcaecati voluptate eveniet debitis aut sapiente, reprehenderit ratione esse nostrum voluptas itaque. Beatae corrupti cum voluptatum, asperiores officia corporis praesentium neque at distinctio. Provident incidunt, molestiae illo necessitatibus explicabo vitae quo error.</Box>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
}


export default HeroLayout;