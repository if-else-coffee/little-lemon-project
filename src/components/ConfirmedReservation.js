import React from 'react';
import BackButton from './BackButton';
import ConfirmationBanner from './ConfirmationBanner';
import StepTwo from './StepTwo';
import ConfirmationMessage from './ConfirmationMessage';
import Gallery from './Gallery';

function ConfirmedReservation () {
    return (
        <div>
            <BackButton/>
            <ConfirmationBanner/>
            <StepTwo/>
            <ConfirmationMessage/>
            <Gallery/>
        </div>
    )
}
export default ConfirmedReservation;