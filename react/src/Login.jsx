import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';




export default function Login() {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { name, password } = formData;
        alert(`Name: ${name}, Password: ${password}`);
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <React.Fragment>
                    <h2><u>Login Form</u></h2>

                    <TextField id="standard-basic" label="Name" variant="standard"
                        name='name'
                        value={formData.name}
                        type='text'
                        onChange={handleChange}
                        fullWidth
                    /> <br />

                    <TextField id="standard-basic" label="Password" variant="standard"
                        name='password'
                        value={formData.password}
                        type='password'
                        onChange={handleChange}
                        fullWidth
                    /><br /><br />

                    <Button onClick={handleSubmit} variant="contained" fullWidth>Login</Button>
                    <input type="checkbox" name="" id="" />Accept terms and condition<br /><br />

                    <Link to="/Form">
                        <Button variant="contained" color="primary" fullWidth>Submit</Button>
                    </Link>
                </React.Fragment>
            </Grid>
        </Grid>
    );
}
