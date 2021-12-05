import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';
const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(45,58,74,0.8)',
    backgroundBlendMode:'darken , luminosity',
    marginTop: 150
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1}}>
      <Grid container sx={{alignItems:'center'}} spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{width:400,marginTop:'-110px'}} src={doctor} alt="" />
        </Grid>
        
        <Grid item xs={12} sx={{textAlign: 'left'}} md={6}>
          <Typography sx={{my:2}} variant="h6" style={{color:'#5ce7ed'}}>
              APPOINTMENT
          </Typography>
          <Typography sx={{mb:2}} style={{ color:'white'}}variant="h4">
              Make an appointment Today
          </Typography>
          <Typography style={{ color:'white',fontSize:14,fontWeight:300}}variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reiciendis dolore commodi dicta nemo non soluta consectetur porro, eveniet quis.
                    </Typography>
                    <Button sx={{ mt: 4 }}
                    variant="contained" style={{backgroundColor:'#00e5ff'}}   
                    >Learn More</Button>
        </Grid>
        
       
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;