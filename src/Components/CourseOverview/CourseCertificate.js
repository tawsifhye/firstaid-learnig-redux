import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TagLine from '../shared/Tagline';
import Content from '../shared/Content';
import certificate from '../../images/certificate.png'
const CourseCertificate = () => {
    return (
        <Box sx={{ background: '#FFF6F6', mb: 5, py: 3 }}>
            <Container sx={{ maxWidth: { lg: 'lg', xl: 'xl' } }}>

                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <TagLine text="Assesment & Certification" />
                        <Content text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. At elit, gravida vitae ac elementum tellus. Justo quam vestibulum aenean pellentesque posuere eu. Euismod mattis mi dictum id. Pellentesque arcu sagittis, id et vitae convallis. Vitae quam et, urna quis nunc, enim leo sit phasellus. Lectus non id non pharetra, sed aliquet bibendum eleifend sagittis. Ac et volutpat facilisis scelerisque purus etiam interdum. Est amet, iaculis sem in mauris netus rutrum. Morbi vitae quis quis eu ut vel at sodales. Eros, purus velit ut vel vitae sit. At interdum sagittis, viverra vitae amet, justo arcu dolor, tortor.' />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{
                            background: '#FFFFFF',
                            boxShadow: '0px 20px 20px rgba(40, 36, 33, 0.06)',
                            borderRadius: '15px',
                            textAlign: 'center', width: '75%', padding: '20px'
                        }} src={certificate} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CourseCertificate;