import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      console.error('No user data found in localStorage.');
      return;
    }

    const user = JSON.parse(storedUser);
    if (!user || !user._id) {
      console.error('User ID not found in localStorage.');
      return;
    }

    const userId = user._id;

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user/${userId}`);
        setUserDetails(response.data.Data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return <Typography variant="h6">Loading Profile...</Typography>;
  }

  return (
    <Box
      sx={{
        marginTop: '50px',
        marginBottom: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '80%',
          height: '60vh',
          backgroundColor: 'white',
          borderRadius: '20px',
          border: '3px solid #2196f3', // Blue border
          boxShadow: '0 8px 24px rgba(33, 150, 243, 0.2)', // Blue shadow
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={4}>
          {/* Avatar Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={userDetails.profilePicture || '/default-avatar.png'}
              alt="Profile"
              sx={{
                width: '160px',
                height: '160px',
                border: '4px solid #2196f3', // Blue border around the avatar
                boxShadow: '0 6px 12px rgba(33, 150, 243, 0.3)', // Blue shadow around the avatar
              }}
            />
          </Grid>

          {/* User Details Section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '80%',
                width: '80%',
                backgroundColor: '#f0f8ff', // Light blue background for details
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for details box
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: 'bold', marginBottom: '10px', textShadow: '1px 1px 4px rgba(33, 150, 243, 0.5)' }}
              >
                {userDetails.firstName} {userDetails.lastName}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: '8px', color: '#333' }}>
                <strong>Username:</strong> {userDetails.username}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: '8px', color: '#333' }}>
                <strong>Email:</strong> {userDetails.email}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: '8px', color: '#333' }}>
                <strong>Phone:</strong> {userDetails.phone}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: '8px', color: '#333' }}>
                <strong>Address:</strong>{' '}
                {`${userDetails.address.street}, ${userDetails.address.city}, ${userDetails.address.state}, ${userDetails.address.country}`}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: '8px', color: '#333' }}>
                <strong>Date of Birth:</strong> {userDetails.dateOfBirth}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
