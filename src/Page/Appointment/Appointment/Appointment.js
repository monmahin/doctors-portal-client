import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointHeader from '../AppointHeader/AppointHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
           <Navigation></Navigation>
            <AppointHeader date={date}
            setDate={setDate}></AppointHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;