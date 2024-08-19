import React from "react";
// import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import './Reg.css'

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To the thapa technical website for programmers.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register using Gmail?
                    </a>
                    <button className="input-button" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="#">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};



export default Registration;










////


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
          textAlign={'center'}
          justifyContent={'center'}
          //  alignItems={'center'}
          margin={'auto'}
          marginTop={0}
          marginRight={0}
          padding={6}
          borderRadius={5}
          boxShadow={'2px 2px 10px gray'}


        >
          <Typography variant='h4' padding={3} color={'maroon'} fontFamily={'monospace'} fontWeight={'bolder'}> <i>{isSignup ? "SignUp" : "Login"} </i></Typography>
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
