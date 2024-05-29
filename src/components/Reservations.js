import React from 'react';
import ReservationForm from './ReservationForm';
import BackButton from './BackButton';
import ReservationBanner from './ReservationBanner';
import StepOne from './StepOne';
import TableBanner from './TableBanner';

function Reservations ({availableTimes, setAvailableTimes}) {
    return (
        <div>
            <BackButton/>
            <ReservationBanner/>
            <StepOne/>
            <ReservationForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
            <TableBanner/>
        </div>
    )
}
export default Reservations;