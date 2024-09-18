// src/components/SignUp.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is valid
  if (!emailRegex.test(email)) {
    setErrorMessage('Please enter a valid email address');
    return;
  }

    try {
      // Update with your Django signup API endpoint
      await axios.post('http://localhost:8000/api/signup/', { username, email, password },{
        withCredentials: true,  // Ensure credentials like cookies are passed if necessary
      });
      
      navigate('/login');  // Redirect to login after successful signup
    } catch (error) {
      console.error('Sign-up failed', error);
      setErrorMessage('Sign-up failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      {errorMessage && (
        <Typography color="error" variant="body1" align="center" gutterBottom>
          {errorMessage}
        </Typography>
      )}
      <TextField
        fullWidth
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignUp}
        fullWidth
        disabled={!username || !email || !password || !confirmPassword}
      >
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;
