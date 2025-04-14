/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const ViewArtifactModal = ({ open, handleClose, artifact }) => {
  const safeArtifact = artifact || {}; // Fallback in case artifact is not provided

  console.log('artifact Detail in the view modal ', artifact);
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth sx={{ '& .MuiPaper-root': { borderRadius: '10px' } }}>
      <DialogTitle sx={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          View Artifact
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: 3 }}>
        {artifact ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{ color: 'black', mb: 2 }}>
                Details:
              </Typography>
              <Box>
                {['name', 'itemNo', 'serialNo', 'description', 'madeOf', 'age', 'shelfNo', 'hallNo'].map((field) => (
                  <Typography key={field} variant="body1" sx={{ color: 'black', mb: 1 }}>
                    <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {safeArtifact[field] || 'N/A'}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h6" sx={{ color: 'black' }}>
            Loading artifact details...
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default ViewArtifactModal;
