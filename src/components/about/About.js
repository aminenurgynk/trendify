// src/components/About.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom>
                Hakkımızda
            </Typography>
            <Typography variant="body1">
                Bu bölümde şirketiniz veya projeniz hakkında bilgiler yer alır. Misyonunuz, vizyonunuz ve hizmetleriniz hakkında ziyaretçilere bilgi verebilirsiniz.
            </Typography>
        </Container>
    );
};

export default About;
