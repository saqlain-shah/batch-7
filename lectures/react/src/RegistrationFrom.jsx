import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
    const initialValues = {
        username: '',
        password: '',
        isLogin: true // Initially, set to login mode
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit = (values) => {
        if (values.isLogin) {
            // Handle login logic
            console.log(`Logging in with Username: ${values.username}, Password: ${values.password}`);
        } else {
            // Handle sign up logic
            console.log(`Signing up with Username: ${values.username}, Password: ${values.password}`);
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <h2>LOG IN</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Username</label>
                            <Field
                                name='username'
                                type='text'
                            />
                            <ErrorMessage name="username" component="div" />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Password</label>
                            <Field
                                name='password'
                                type='password'
                            />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit">{initialValues.isLogin ? 'Login' : 'Sign Up'}</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegistrationForm;
