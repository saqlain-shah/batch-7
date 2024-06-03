import React from 'react';
import { TextField, Button, Paper, Typography, Link, Box } from '@mui/material';
import { styled } from '@mui/system';

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: 'auto',
  marginTop: theme.spacing(10),
  maxWidth: 400,
}));

const FormStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const InputStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LinkStyled = styled(Typography)({
  textAlign: 'center',
});

const LoginForm = () => {
  return (
    <PaperStyled elevation={2}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <FormStyled component="form" noValidate autoComplete="off">
        <InputStyled
          label="Email"
          variant="outlined"
          required
        />
        <InputStyled
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <ButtonStyled variant="contained" color="primary">
          Login
        </ButtonStyled>
      </FormStyled>
      <LinkStyled>
        <Link href="/register">
          Don't have an account? Register
        </Link>
      </LinkStyled>
    </PaperStyled>
  );
};

export default LoginForm;
