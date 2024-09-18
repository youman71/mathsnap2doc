// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Math Equation SaaS. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
