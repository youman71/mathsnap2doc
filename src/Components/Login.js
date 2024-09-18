// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = async () => {
    try {
      // Update with your Django login API endpoint
      await axios.post('http://localhost:8000/api/login/', { email, password });
      navigate('/upload');  // Redirect to a dashboard or homepage after successful login
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };
  // Function to toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the boolean state
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {errorMessage && (
        <Typography color="error" variant="body1" align="center" gutterBottom>
          {errorMessage}
        </Typography>
      )}
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
        type={showPassword ? 'text' : 'password'} // Toggle between "text" and "password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
        disabled={!email || !password}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
