import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import logo from './logo.png'


const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'darkblue', paddingLeft:'0px' }}>
      <Toolbar sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ width: '100%', backgroundColor: 'darkblue' }}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box sx={{  width: '20%'}}>
            <Link to="/home" style={{ textDecoration: 'none'  }}>
              <Typography variant="body1" sx={{ width: '100px', height: '30px', backgroundColor:'white',color:'black', marginLeft: '20%' ,padding:'4px' ,WebkitBorderTopLeftRadius:'20px', WebkitBorderBottomRightRadius:'20px' ,fontSize:'20px' , fontFamily: 'sans-serif' ,fontWeight:'bolder','&:hover': { color: 'darkblue' , fontSize: '21px'}}}> NETBOTS</Typography>
            </Link>
             
            </Box>
            <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1" sx={{ mb: 1 }}>Our Office</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}> Rinor.netbot, skardu, Pakistan</Typography>
            </Box>
            <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1" sx={{ mb: 1 }}>Email Us</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>netbot@gmail.com</Typography>
            </Box>
            <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="body1" sx={{ mb: 1 }}>Call Us</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>+01123223453</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'whitesmoke' }} >
          <Box sx={{ width: '3%'  , paddingLeft:'7%'}}>
          <img  src={logo} alt=""  width={40} height={30}/>
          </Box>
          <Box sx={{ width: '65%' }}>
            <ul style={{ display: 'flex', justifyContent: 'space-between', width: '50%', listStyle: 'none', display: 'flex', alignItems: 'center', margin: 5 }}>
              <li sx={{'&:hover': { color: 'red', fontSize: '15px' }}}><Link to="/HomePage" style={{ textDecoration: 'none', color: 'black', fontFamily: 'sans-serif', marginRight: '8px' }}>Home</Link></li>
              <li><Link to="/about" style={{ textDecoration: 'none', color: 'black', fontFamily: 'sans-serif', marginRight: '8px' }}>About</Link></li>
              <li><Link to="/products" style={{ textDecoration: 'none', color: 'black', fontFamily: 'sans-serif', marginRight: '8px' }}>Product</Link></li>
              <li><Link to="/Table" style={{ textDecoration: 'none', color: 'black', fontFamily: 'sans-serif', marginRight: '8px' }}>Table</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black', fontFamily: 'sans-serif' ,'&:hover': { color: 'red', fontSize: '15px' }}}>Contact</Link></li>
            </ul>
          </Box>
          <Box sx={{ width: '20%' }}>
            {/* Adding hover effect */}
           <Link to='/LoginForm' style={{textDecoration: 'none'}}><Typography variant="body2" sx={{ cursor: 'pointer', color: 'white', fontFamily: 'sans-serif', fontWeight: 'bolder', backgroundColor:'darkblue' , borderRadius: '30px', width:'57px' ,padding: '3px' , paddingLeft: '12px','&:hover': { color: 'yellow', fontSize: '15px' } }}>Signup</Typography></Link> 
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
