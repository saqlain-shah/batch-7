import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SecondComponent = () => {
    const initialValues = {
        name: '',
        fName: '',
        email: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        fName: Yup.string().required('Father Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required')
    });

    const handleSubmit = (values) => {
        alert(`Name: ${values.name}, Father Name: ${values.fName}, Email: ${values.email}`);
    };

    return (
        <div>
            <h2>Second Component</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Name</label>
                            <Field
                                name='name'
                                type='text'
                            />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                            <label>Father Name</label>
                            <Field
                                name='fName'
                                type='text'
                            />
                            <ErrorMessage name="fName" component="div" />
                        </div>
                        <div>
                            <label>Email</label>
                            <Field
                                name='email'
                                type='text'
                            />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SecondComponent;

