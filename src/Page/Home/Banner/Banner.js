import React from 'react';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    height:'500px'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container sx={{alignItems:'center', my:5}} spacing={2}>
          <Grid item style={{textAlign:'left'}} xs={12} md={6}>
          <Typography sx={{my:2}} variant="h3" style={{color:'#2C3A47',fontWeight:700}}>
              Your New Smile <br />Starts Here
          </Typography>
          <Typography sx={{my:2,fontSize:14,}} variant="h6" style={{color:'gray'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic facere placeat maiores eum accusamus impedit iste quasi dolorem inventore?
                    </Typography>
                    <Button sx={{ mt: 2 }}
                    variant="contained" style={{backgroundColor:'#00e5ff'}}   
                    >GET APPOINTMENT</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img width='350' src={chair} alt="" />
          </Grid>
         
          
        </Grid>
      </Container>  
    );
};

export default Banner;