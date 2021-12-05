import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({ booking,date,setBookingSuccess }) => {
    const { name, time, space ,price} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenModal = () => setOpenBooking(true);
    const handleCloseModal = () => setOpenBooking(false);
  
    return (
        <>
    <Grid item xs={12} sm={6} md={4}>
     <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography style={{color:'#00e5ff'}} sx={{ fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="body1" display="block" gutterBottom>
                        price ${price}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                {/* <Button variant="contained">BOOK APPOINTMENT</Button> */}
                <Button onClick={handleOpenModal} variant="contained" style={{backgroundColor:'#00e5ff'}}   
                    >BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
            booking={booking}
            date={date}
            handleCloseModal={handleCloseModal}
            openBooking={openBooking}
            setBookingSuccess={setBookingSuccess}
            ></BookingModal>
            </>
    );
};

export default Booking;