import React, { useState } from 'react';
import { Alert, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Booking from '../Booking/Booking'
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 80,

    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 60,

    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price: 40,

    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 30,

    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 45

    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 50,

    },
]

const AvailableAppointment = ({date}) => {
  const  [bookingSuccess,setBookingSuccess]=useState(false)
    return (
<Container sx={{my:5}}>
<Typography variant="h4"  sx={{ mb: 5, fontWeight: 'bold' }}>Available Appointments on <span style={{color:'#00e5ff'}}> {date.toDateString()}</span></Typography>
{bookingSuccess && <Alert severity="info" sx={{my:2}}>Appointment Booked successfully!</Alert>}
    <Grid container spacing={2}>
        {
            bookings.map(booking=><Booking
                key={booking.id}
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></Booking>)
        }
    </Grid>
</Container>
    );
};

export default AvailableAppointment;