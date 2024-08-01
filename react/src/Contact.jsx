import React from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} style={{ padding: '2rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              style={{ marginBottom: '1rem' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
