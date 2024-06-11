// ProfileDropzone.jsx
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ProfileDropzone = ({ onFileSelect }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        
        borderRadius: '30%',
        width: 120,
        height: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <input {...getInputProps()} />
      {previewImage ? (
        <Avatar
          src={previewImage}
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton color='primary'>
            <CloudUploadIcon fontSize="large" />
          </IconButton>
          <Typography variant="body2" align="center">
            {isDragActive ? 'Drop here' : 'Drag & drop or click to upload'}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProfileDropzone;
