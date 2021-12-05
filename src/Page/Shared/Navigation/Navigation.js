import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { AccountCircle, Logout, PersonAdd } from '@mui/icons-material';
import { ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';

const Navigation = () => {
  const { user, logout } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'left'}}>
          <HomeIcon fontSize="large" color="white" />
          </Typography> */}
         
            <Link style={{
              
              color: 'white' 
            }}
              to="/" ><HomeIcon/></Link>
            
            <Link style={{
              flexGrow: 1,
              textAlign:'left',
              textDecoration: 'none', color: 'white'
            }}
              to="/home" ><Button color="inherit">Home</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}
              to="/appointment" ><Button color="inherit">Appointment</Button></Link>
            { user?.email ?
              <Box>
                 <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard" ><Button color="inherit">Dashboard</Button></Link>
                <Button onClick={logout} style={{ textDecoration: 'none', color: 'white' }} color="inherit">logout</Button>
              </Box>
              :
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/login" ><Button color="inherit">Login</Button></Link>
              
            }
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <MenuItem onClick={handleClose} >
                {user?.email ? <Typography
                  onClick={logout} color="primary">
                   <ListItemIcon>
                  <Logout fontSize="small" />
                   </ListItemIcon>
                  LOGOUT</Typography>
                  :
                  <Link style={{
                    textDecoration: 'none',color: '#1976D2'
                  }}
                    to="/login" >
                    <ListItemIcon>
                    <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    LOGIN</Link>
                }
                </MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;