// src/components/UploadAndResult.js
import React, { useState } from 'react';
import { Grid, Button, TextField, Container, Typography } from '@mui/material';
import axios from 'axios';
import FileUpload from './FileUpload';

const UploadAndResult = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedEquation, setExtractedEquation] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Replace with your API call for extracting the equation
      const response = await axios.post('/api/upload', formData);
      setExtractedEquation(response.data.equation);
    } catch (error) {
      console.error('Upload failed', error);
    }
  };
  const handleInputChange = (event) => {
    setExtractedEquation(event.target.value);  // Update state as the user types
  };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Upload Equation</Typography>
          {/* <input type="file" onChange={handleFileChange} />
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload
          </Button> */}
          <FileUpload></FileUpload>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Extracted Equation</Typography>
          <TextField
             fullWidth
             multiline
             value={extractedEquation}  // Controlled input value
             onChange={handleInputChange}  // Handle input changes
             variant="outlined"
             rows={4}  // Number of rows in multiline TextField
             placeholder="Enter equation here..."
            
          />
          <Button variant="contained" color="secondary" onClick={() => navigator.clipboard.writeText(extractedEquation)}>
            Copy to Clipboard
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadAndResult;
