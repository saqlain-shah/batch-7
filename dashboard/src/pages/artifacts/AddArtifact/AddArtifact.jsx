import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, IconButton, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import VoiceRecording from './VoiceRecording';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddArtifact({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    itemNo: '',
    serialNo: '',
    description: '',
    madeOf: '',
    age: '',
    shelfNo: '',
    hallNo: '',
    particulars: {
      width: '',
      depth: '',
      circumference: '',
      diameters: '',
      weight: ''
    },
    images: [],
    audio: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleParticularsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      particulars: {
        ...prevData.particulars,
        [name]: value
      }
    }));
  };

  const handleImageUpload = (acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      images: acceptedFiles
    }));
  };

  const handleAudioStop = (blob) => {
    setFormData((prevData) => ({
      ...prevData,
      audio: blob
    }));
  };

  const handleAudioSave = (blob) => {
    setFormData((prevData) => ({
      ...prevData,
      audio: blob
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: true,
    onDrop: handleImageUpload
  });

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'particulars') {
        Object.keys(formData.particulars).forEach((particularKey) => {
          formDataToSend.append(`particulars[${particularKey}]`, formData.particulars[particularKey]);
        });
      } else if (key === 'images') {
        formData.images.forEach((image, index) => {
          formDataToSend.append('images', image);
        });
      } else if (key === 'audio') {
        if (formData.audio) formDataToSend.append('audio', formData.audio);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      await axios.post('http://localhost:5000/api/artifacts', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Artifact added successfully!');
      // Clear form data
      setFormData({
        name: '',
        itemNo: '',
        serialNo: '',
        description: '',
        madeOf: '',
        age: '',
        shelfNo: '',
        hallNo: '',
        particulars: {
          width: '',
          depth: '',
          circumference: '',
          diameters: '',
          weight: ''
        },
        images: [],
        audio: null
      });
      handleClose();
    } catch (error) {
      toast.error('Failed to add artifact. Please try again.');
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          style: {
            width: '90%',
            height: '95%',
            maxWidth: 'none',
            maxHeight: 'none'
          }
        }}
      >
        <DialogTitle>
          <Typography variant="h6">Add New Artifact</Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ height: 'calc(95% - 64px)', overflowY: 'auto' }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Item No"
                name="itemNo"
                value={formData.itemNo}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Serial No"
                name="serialNo"
                value={formData.serialNo}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Made Of"
                name="madeOf"
                value={formData.madeOf}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            {/* Third Row */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Shelf No"
                name="shelfNo"
                value={formData.shelfNo}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Hall No"
                name="hallNo"
                value={formData.hallNo}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>

            {/* Particulars Row */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Particulars:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                  <TextField
                    fullWidth
                    label="Width"
                    name="width"
                    value={formData.particulars.width}
                    onChange={handleParticularsChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    fullWidth
                    label="Depth"
                    name="depth"
                    value={formData.particulars.depth}
                    onChange={handleParticularsChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    fullWidth
                    label="Circumference"
                    name="circumference"
                    value={formData.particulars.circumference}
                    onChange={handleParticularsChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    fullWidth
                    label="Diameters"
                    name="diameters"
                    value={formData.particulars.diameters}
                    onChange={handleParticularsChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    fullWidth
                    label="Weight"
                    name="weight"
                    value={formData.particulars.weight}
                    onChange={handleParticularsChange}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </>
  );
}
