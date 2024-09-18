import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);  // Store the selected file
  const [preview, setPreview] = useState(null);  // Store the preview URL

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Create a preview URL for the selected image file
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);  // Update the preview state with the file URL
      };
      reader.readAsDataURL(file);  // Convert file to Data URL (base64 encoded)
    }
  };

  // Handle form submission (if you want to upload the file to the server)
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      console.log('No file selected');
      return;
    }

    // You can perform your file upload logic here (e.g., using Axios)
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Uncomment and adjust this to your backend upload URL
      // const response = await axios.post('http://localhost:8000/api/upload', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      console.log('File uploaded successfully:', selectedFile);
      // Reset file input and preview after upload
      setSelectedFile(null);
      setPreview(null);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Upload and Preview Image
      </Typography>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        
        {preview && (
          <div style={{ marginTop: '20px' }}>
            <Typography align="center" gutterBottom>
              Image Preview:
            </Typography>
            <img src={preview} alt="Preview" style={{ width: '300px', height: 'auto' }} />
          </div>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
          disabled={!selectedFile}  // Disable if no file is selected
        >
          Upload
        </Button>
      </form>
    </Container>
  );
};

export default FileUpload;
