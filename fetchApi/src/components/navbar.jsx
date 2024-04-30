import { AppBar, Button, Link, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react'

function Navbar() {
  return (

    <>
    <AppBar>
        <Toolbar>
            <Typography></Typography>
            <Stack direction={'row'}>
                <Button color='inherit' component={Link} to="/counterr">counterr</Button>
                <Button color='inherit' component={Link} to="/fetchapi">FetcApi</Button>
                <Button color='inherit' component={Link} to="/useEffect">UseEffect</Button>
                <Button color='inherit' component={Link} to="/counter">counter</Button>


            </Stack>
        </Toolbar>
    </AppBar>
    
    
    
    </>
  )
}

export default Navbar;