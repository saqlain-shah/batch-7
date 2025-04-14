import React from 'react';
import { TextField, Button } from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Snackbar from '@mui/material/Snackbar';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function Registrationsecond() {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h2><u>SIGN UP</u></h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPass: ''
        }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, errors, touched }) => (
          <Form>
            <div style={{ marginBottom: '16px' }}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={handleChange}
                value={values.name}
              />
              <ErrorMessage name="name" component="div" />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <TextField
                id="confirmPass"
                name="confirmPass"
                label="Confirm Password"
                variant="outlined"
                type="password"
                onChange={handleChange}
                value={values.confirmPass}
              />
              <ErrorMessage name="confirmPass" component="div" />
            </div>

            <input type="checkbox" name="acceptTerms" id="acceptTerms" />
            <label htmlFor="acceptTerms">Accept terms and condition</label>
            <br /> <br />

            <Button type="submit" variant="contained">Submit</Button>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={false}
        autoHideDuration={2000}
        onClose={() => {}}
        message="Successfully registered"
      />
    </div>
  );
}
