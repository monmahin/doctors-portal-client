import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #00e5ff',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px'
};
const BookingModal = ({openBooking,handleCloseModal,booking,date,setBookingSuccess}) => {
  const { name, time,price } = booking;
  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
     const value = e.target.value;
     const newInfo = {...bookingInfo };
     newInfo[field] = value;
     setBookingInfo(newInfo);
    
  }
    const handleBookingSubmit = e => {
        // collect data
      const appointment = {
        ...bookingInfo, time, serviceName: name,price,
        date:date.toLocaleDateString()
      }
        // send to the server
        fetch('https://cryptic-badlands-02135.herokuapp.com/appointments', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(appointment)
      })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              setBookingSuccess(true);
              handleCloseModal();
          }
          }); 
      

        
        e.preventDefault();
    }
    return (
        <div>
          <Modal
       aria-labelledby="transition-modal-title"
       aria-describedby="transition-modal-description"
       open={openBooking}
       onClose={handleCloseModal}
       closeAfterTransition
       BackdropComponent={Backdrop}
       BackdropProps={{
           timeout: 500,
       }}
      >
        <Box sx={style}>
          <Typography style={{color:'#00e5ff'}} id="transition-modal-title" variant="h6" component="h2">
            {name.toUpperCase()}
          </Typography>
          
          <form onSubmit={handleBookingSubmit} >
          <TextField
             disabled
             sx={{ width: '100%', my: 1 }}
             id="outlined-size-small"
             defaultValue={time}
             size="small"
            />
            <TextField
             sx={{ width: '100%', mb: 1 }}
             id="outlined-size-small"
             name="patientName"
             onBlur={handleOnBlur}
             defaultValue={user.displayName}
             size="small"
             />
            <TextField
             sx={{ width: '100%', mb: 1 }}
             id="outlined-size-small"
             name="email"
             onBlur={handleOnBlur}
             defaultValue={user.email}
             size="small"
            />
            <TextField
             sx={{ width: '100%', mb: 1 }}
             id="outlined-size-small"
             name="phone"
             onBlur={handleOnBlur}
             defaultValue="Phone Number"
             size="small"
            />
            <TextField
             disabled
             sx={{ width: '100%', mb: 1 }}
             id="outlined-size-small"
             defaultValue={date.toDateString()}
             size="small"
            />
            <Button style={{backgroundColor:'#00e5ff'}} type="submit" variant="contained">Submit</Button>
          </form>
        </Box>
      </Modal>  
        </div>
    );
};

export default BookingModal;