// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container sx={{ my: 5, py: 3, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" color="text.secondary" align="center">
                © 2024 Trendify. Tüm hakları saklıdır.
            </Typography>
        </Container>
    );
};

export default Footer;
