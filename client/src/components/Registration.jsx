import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Button, Stepper, Step, StepLabel, Box, Typography, Paper } from '@mui/material';
import { validationSchema } from './ValidationSchema';

const steps = ['Personal Details', 'Address Details', 'Review & Submit'];

const initialValues = {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
    },
    phone: '',
    roles: ['user'],
    dateOfBirth: '',
};

const RegisterForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = (values) => {
        console.log('Form Data', values);
        handleNext();
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Field
                            component={TextField}
                            name="username"
                            label="Username"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="firstName"
                            label="First Name"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="dateOfBirth"
                            type="date"
                            label="Date of Birth"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <Field
                            component={TextField}
                            name="address.street"
                            label="Street"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="address.city"
                            label="City"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="address.state"
                            label="State"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="address.postalCode"
                            label="Postal Code"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="address.country"
                            label="Country"
                            fullWidth
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="phone"
                            label="Phone"
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
            case 2:
                return (
                    <Typography variant="h6">
                        Review your information and submit.
                    </Typography>
                );
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Box mt={4} textAlign="center">
                        <Typography variant="h4" align="center">
                            Registration Form
                        </Typography>
                    </Box>
                    <Paper 
                        variant="outlined" 
                        elevation={3} 
                        sx={{ mt: 2, mx: 'auto',  width: '90%', maxWidth: '600px' }}
                    >
                        <Stepper activeStep={activeStep}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Box mt={2}>
                            {renderStepContent(activeStep)}
                            <Box mt={2} display="flex" justifyContent="space-between">
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack}>Back</Button>
                                )}
                                <Button
                                    type={activeStep === steps.length - 1 ? 'submit' : 'button'}
                                    onClick={activeStep === steps.length - 1 ? null : handleNext}
                                    disabled={isSubmitting}
                                >
                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
