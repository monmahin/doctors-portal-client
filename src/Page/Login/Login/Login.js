import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useNavigate} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user,signInWithGoogle, loginUser, isLoading, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
                const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password,location, navigate);
        e.preventDefault();
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate)
}
    return (
        <Container>
            <Grid sx={{mt:5}} container spacing={2}>
  <Grid item xs={12} md={6}>
  <Typography color='#00e5ff' variant="h3" gutterBottom>Login</Typography>
  <form onSubmit={handleLoginSubmit}>
  <TextField sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Your Email"
     name="email"
     type="email"
     onBlur={handleOnChange} 
     variant="standard"
    /> 
  <TextField sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Your Password"
     name="password"
     onBlur={handleOnChange} 
     type="password"
     variant="standard"
    /> 
    <Button 
     style={{backgroundColor:'#00e5ff'}}
     sx={{ width: '75%', mt: 3 ,mx:1 }} type="submit" variant="contained"
     >Login</Button>
    
    <NavLink
     style={{ textDecoration: 'none' }}
     to="/register">
    <Button sx={{my:4}} variant="text">New User? Please Register</Button>
    </NavLink>
    {isLoading && <CircularProgress />}
    {user?.email && <Alert severity="success" >Login successfully!</Alert>}
    {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>------------------------</p>
      <Button
       style={{backgroundColor:'#00e5ff'}}
       sx={{ width: '75%' ,mx:1 }}
       onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
  </Grid>
  <Grid item xs={12} md={6}>
    <img src={login} width='75%' alt="" />
  </Grid>
  
</Grid>
        </Container>
    );
};

export default Login;