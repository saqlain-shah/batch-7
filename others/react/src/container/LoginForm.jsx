


import React, { useState } from 'react'
import { Box, TextField, Typography, Button, autocompleteClasses, Snackbar } from '@mui/material'
// import { blue } from '@mui/material/colors';


const SignInContainer = () => {
  const [isSignup, setIsSignup] = useState(true)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleChange = (e) => {

    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value

    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true)
    console.log(data);
    // const {name,email,password}=data;
    // if(isSignup){
    //   alert(name,email,password);
    // }
    // else{
    //   alert(email,password);
    // }
  }

  const resetState = () => {
    setIsSignup(!isSignup);
    setData({ name: '', email: '', password: '' })
  } 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display='flex'
          flexDirection={'column'}
          maxWidth={300}
          height={300}
          textAlign={'center'}
          justifyContent={'center'}
          //  alignItems={'center'}
          margin={'auto'}
          marginTop={20}
          marginRight={50}
          padding={6}
          borderRadius={1}
          boxShadow={'2px 2px 10px gray'}
        >
          <Typography variant='h4' padding={1} color={'maroon'} fontFamily={'monospace'} fontWeight={'bolder'}> <i>{isSignup ? "SignUp" : "Login"} </i></Typography>
          {isSignup &&
            (<TextField
              name='name'
              value={data.name}
              onChange={handleChange}

              margin='normal' type='text' variant='standard' label="Name" />
            )}
          <TextField
            name='email'
            value={data.email}
            onChange={handleChange}
            margin='normal' type='email' variant='standard' label='Email' />
          <TextField
            name='password'
            value={data.password}
            onChange={handleChange}
            
            margin='normal' type='password' variant='standard' label='Password' />
          <Button type='submit' sx={{ marginTop: '8px' }} variant='contained' color='warning'>
            {isSignup ? "SignUp" : "Login"}
          </Button>
          <Button onClick={resetState} sx={{ marginTop: '6px' }}  >
            Change To  {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        // message={`Name : ${data.name},Email : ${data.email},Password : ${data.password}`}
        message={isSignup? 'Registered Successfully' : 'Login Successfull'}
      />
    </div>
  )
}
export { SignInContainer };
