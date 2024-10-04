import React, { useState } from 'react';
import { Box, Typography, Grid, IconButton, Menu, MenuItem, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const officeInfo = [
  { label: 'Email Us', detail: 'netbot@gmail.com' },
  { label: 'Call Us', detail: '+01123223453' },
  { label: 'Our Office', detail: 'Rinor.netbot, Skardu, Pakistan' },
];

const Footer = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="footer"
      sx={{
        padding: '20px 0',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center" spacing={2} sx={{ flexWrap: 'nowrap' }}>
        
        {/* Logo Section */}
        <Grid item xs={12} sm={3} display="flex" justifyContent="center">
          <Box display="flex" alignItems="center">
            <img src="../../public/logo.jpeg" alt="Cloth Logo" style={{ height: 40, marginRight: 10 }} />
          </Box>
        </Grid>

        {/* Brand Description Section */}
        <Grid item xs={12} sm={3} display="flex" justifyContent="center">
          <Typography variant="body2" sx={{ color: '#333', fontStyle: 'italic' }}>
            Premium clothing for all styles.
          </Typography>
        </Grid>

        {/* Contact Us Dropdown */}
        <Grid item xs={12} sm={3} display="flex" justifyContent="center">
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick}
            sx={{
              color: '#333',
            }}
          >
            Contact Us
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {officeInfo.map((info, index) => (
              <MenuItem key={index} onClick={handleClose}>
                <Typography variant="body1" sx={{ color: '#333', fontWeight: '500' }}>
                  {info.label}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {info.detail}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Grid>

        {/* Social Media & Copyright Section */}
        <Grid item xs={12} sm={3} display="flex" justifyContent="center">
          <Box display="flex" alignItems="center">
            <IconButton aria-label="Facebook" href="https://www.facebook.com" target="_blank" sx={{ color: '#1976d2' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" href="https://www.twitter.com" target="_blank" sx={{ color: '#1976d2' }}>
              <TwitterIcon />
            </IconButton>
            <Box display="flex" alignItems="center" ml={2}>
              <CopyrightIcon sx={{ color: '#1976d2' }} />
              <Typography variant="body2" sx={{ ml: 1, color: '#333' }}>
                Rinor. All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
