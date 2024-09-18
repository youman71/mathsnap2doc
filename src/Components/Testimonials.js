// src/components/Testimonials.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const testimonialsData = [
  { name: 'John Doe', text: 'This app saved me hours of work!' },
  { name: 'Jane Smith', text: 'Super easy to use and accurate!' },
  { name: 'Sam Wilson', text: 'A must-have tool for anyone working with equations.' },
];

const Testimonials = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonialsData.map((testimonial, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body1">{testimonial.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Testimonials;
