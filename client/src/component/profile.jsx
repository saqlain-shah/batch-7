import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user data from the server (assuming the user ID is stored in localStorage after login)
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User', user)
    const userId = user?.id; 
    console.log('userid',userId)


    const fetchUserDetails = async () => {
      try {
        if (!userId) {
          console.log('No userId found');
          return;
        }
        // Make a request to the endpoint with the user ID
        const response = await axios.get(`http://localhost:8000/api/user/${userId}`);
        console.log('User details fetched from API:', response.data.Data); // Log the fetched user details

        setUserDetails(response.data.Data); // Set user details into state
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails(); // Call the function if userId exists
    }
  }, []);

  if (!userDetails) {
    return <Typography variant="h6">Loading Profile...</Typography>;
  }

  return (
    <Box sx={{ marginTop: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          width: '70%',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Avatar
              src={`http://localhost:8000/${userDetails.profilePicture}`} // Assuming profilePicture is a path from the server
              alt="Profile Picture"
              sx={{ width: 150, height: 150, margin: '0 auto' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" color="primary">
              {userDetails.firstName} {userDetails.lastName}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              <strong>Username:</strong> {userDetails.username}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {userDetails.email}
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> {userDetails.phone}
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> {userDetails.address}
            </Typography>
            <Typography variant="body1">
              <strong>Date of Birth:</strong> {userDetails.dateOfBirth}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
