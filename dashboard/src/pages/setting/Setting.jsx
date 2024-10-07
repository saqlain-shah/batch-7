import React, { useState } from 'react';
import { Box, Button, TextField, Grid, Typography, MenuItem } from '@mui/material';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderProfileForms = () => (
    <>
      <Box sx={{ mb: 3, p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
        <Typography variant="h6">Personal </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Name" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Username" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              defaultValue="1989-01-20"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Gender" defaultValue="">
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Role" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Status" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Department" defaultValue="" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 3, p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
        <Typography variant="h6">Contact</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Website" defaultValue="http://" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Languages" defaultValue="English" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Address Line 1" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Address Line 2" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Post Code" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="City" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="State" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Country" defaultValue="" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
        <Typography variant="h6">Social</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Twitter" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Facebook" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Instagram" defaultValue="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="GitHub" defaultValue="" />
          </Grid>
        </Grid>
      </Box>
    </>
  );

  const renderPasswordForm = () => (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h6">Change Password</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Old Password" type="password" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="New Password" type="password" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="New Password Repeat" type="password" />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" onClick={() => setActiveTab('profile')} sx={{ mr: 2 }}>
          Profile
        </Button>
        <Button variant="contained" onClick={() => setActiveTab('password')}>
          Password
        </Button>
      </Box>

      {activeTab === 'profile' && renderProfileForms()}
      {activeTab === 'password' && renderPasswordForm()}
    </Box>
  );
};

export default ProfileSettings;