import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function RegForm() {
    const [formData, setFormData] = useState({
        name: '',
        course: '',
        email: '',
        password: '',
        confirmPass: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { name, course, email, password, confirmPass } = formData;
        alert(`Name: ${name}, Course: ${course}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPass}`);
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <React.Fragment>
                    <h2><u>Registration Form</u></h2>

                    <TextField id="standard-basic" label="Name" variant="standard"
                        name='name'
                        value={formData.name}
                        type='text'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField id="standard-basic" label="Course" variant="standard"
                        name='course'
                        value={formData.course}
                        type='text'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField id="standard-basic" label="Email" variant="standard"
                        name='email'
                        value={formData.email}
                        type='email'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField id="standard-basic" label="Password" variant="standard"
                        name='password'
                        value={formData.password}
                        type='password'
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField id="standard-basic" label="Confirm Password" variant="standard"
                        name='confirmPass'
                        value={formData.confirmPass}
                        type='password'
                        onChange={handleChange}
                        fullWidth
                    /><br /><br />

                    <Button onClick={handleSubmit} variant="contained" fullWidth>Register</Button>
                    <input type="checkbox" name="" id="" />Accept terms and condition<br /><br />

                    <Link to="/Login">
                        <Button variant="contained" color="primary" fullWidth>SignUp</Button>
                    </Link>
                </React.Fragment>
            </Grid>
        </Grid>
    );
}
