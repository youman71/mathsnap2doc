// src/components/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import Testimonials from './Testimonials';
import Mycomp from './Mycomp';


const Home = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        How to Use the App
      </Typography>
      <video controls width="100%">
        <source src={require('../Assets/instructional-video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     <Mycomp content="Hello"></Mycomp>
    </Container>
  );
};

export default Home;
