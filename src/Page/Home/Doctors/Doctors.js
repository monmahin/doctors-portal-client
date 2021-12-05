import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        //https://cryptic-badlands-02135.herokuapp.com
        fetch('https://cryptic-badlands-02135.herokuapp.com/doctors')
            .then(res => res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <h2>Doctors {doctors.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;