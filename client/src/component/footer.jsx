import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: '#f8f8f8',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center" marginTop={'5%'}>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center">
            <img src="../../public/logo.jpeg" alt="Cloth Logo" style={{ height: 40, marginRight: 10 }} />
            <Typography variant="h6" component="div">
              Evershop
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ textAlign: 'center', marginTop: { xs: 2, md: 0 } }}>
          <Typography variant="body1" component="div">
            High-quality clothing made with the finest materials.
            <br />
            Designed for comfort and style.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <IconButton aria-label="Facebook" href="https://www.facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" href="https://www.twitter.com" target="_blank">
              <TwitterIcon />
            </IconButton>
            <Box display="flex" alignItems="center" ml={2}>
              <CopyrightIcon />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Evershop. All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
