// src/components/About.js
import React from "react";
import { Typography, Container, useTheme } from "@mui/material";

const About = () => {

    const theme = useTheme();

  return (
    <>
      <div style={{ ...theme.mixins.toolbar }} />
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          This section contains information about your company or project. You can
          provide information to visitors about your mission, vision and services.
        </Typography>
      </Container>
    </>
  );
};

export default About;
