import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';
const stripePromise=loadStripe('pk_test_51JyaUAGlefnMt0PsJMqWkTafP1TA3L9cWpSSIyHWvWmceNGZ9rWoUMHxER8FAQX0x17nzMJ2SXCiGf61LimHhxA2001Wmlng1F')
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({})
    
    useEffect(() => {
        fetch(`https://cryptic-badlands-02135.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
        .then(data=>setAppointment(data))
    }, [appointmentId])
    
    return (
        <div>
            <h2>Please pay  {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay ${appointment.price}</h4>
            { appointment?.price &&
                <Elements stripe={stripePromise}>
                <CheckOutForm
                appointment={appointment}
                ></CheckOutForm>
            </Elements>
            }
        </div>
    );
};

export default Payment;
