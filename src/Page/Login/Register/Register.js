
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'
const Register = () => {
  const [loginData, setLoginData] = useState({})
  const navigate = useNavigate();
  const {user,authError,registerUser,isLoading}=useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
                const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
      }
      registerUser(loginData.email, loginData.password,loginData.name, navigate);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{mt:5}} container spacing={2}>
  <Grid item xs={12} md={6}>
  <Typography color='#00e5ff' variant="h3" gutterBottom>Register</Typography>
  {!isLoading  && <form onSubmit={handleLoginSubmit}>
  <TextField sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Your name"
     name="name"
     type="text"
     onBlur={handleOnBlur} 
     variant="standard"
    /> 
  <TextField sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Your Email"
     name="email"
     type="email"
     onBlur={handleOnBlur} 
     variant="standard"
    /> 
  <TextField sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Your Password"
     name="password"
     onBlur={handleOnBlur} 
     type="password"
     variant="standard"
    /> 
  <TextField sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Retype Your Password"
     name="password2"
     onBlur={handleOnBlur} 
     type="password"
     variant="standard"
    /> 
    <Button 
     style={{backgroundColor:'#00e5ff'}}
     sx={{ width: '75%', mt: 3 ,mx:1 }} type="submit" variant="contained"
     >Register</Button>
    <NavLink
     style={{textDecoration: 'none'}}
     to="/login">
    <Button sx={{my:4}} variant="text">Already Registered? Please Login</Button>
    </NavLink>
  </form>}
  {isLoading && <CircularProgress />}
  {user?.email && <Alert severity="success">User Registered successfully!</Alert>}
  {authError && <Alert severity="error">{authError}</Alert>}
  </Grid>
  <Grid item xs={12} md={6}>
    <img src={login} width='75%' alt="" />
  </Grid>
  
</Grid>
        </Container>
    );
};

export default Register;