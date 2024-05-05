import React from 'react'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <AppBar >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <img src='/src/assets/rinor.jpg' alt="Logo" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
            <Typography variant="h6" component="div">
              My Website
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button color='inherit' component={Link} to="/home">Home</Button>
            <Button color='inherit' component={Link} to="/about">About</Button>
            <Button color='inherit' component={Link} to="/contact">Contact</Button>
            <Button color='inherit' component={Link} to="/login">Login</Button>
            <Button color='inherit' component={Link} to="/signup">Sign Up</Button>
            <Button color='inherit' component={Link} to="/electronicProducts">Products</Button>
            <Button color='inherit' component={Link} to="/counterr">Counter</Button>
            <Button color='inherit' component={Link} to="/mainClock">Clock</Button>

          </Stack>
        </Toolbar>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
