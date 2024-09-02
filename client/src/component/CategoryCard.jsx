import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, title, description, }) => {
    // console.log("props value in Category Card", title)
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '95%',
        width: '80%',
        textAlign: 'center',
        border: '3px solid #B0BEC5',
        borderRadius: '10px',
        padding: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem'
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: 'inherit', maxHeight: '220px', marginBottom: '1rem', borderRadius: '8px' }}
      />
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {description}
      </Typography>
      <Button sx={{ marginTop: '7%' }} variant="contained" color="primary" 
      onClick={() => navigate(`/product-List`, { state: { category: title} })}>
        Shop {title}
      </Button>
    </Box>
  );
};

export default CategoryCard;
