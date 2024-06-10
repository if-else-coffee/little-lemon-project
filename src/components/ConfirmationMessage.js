import React from 'react';

function ConfirmationMessage () {
    return (
        < div className="confirmation">
            <div className="confirmation-heading">
                <h1>Thank you for your reservation!</h1>
            </div>
            <div className="confirmation-description">
                <h5>We are looking forward to seeing you at Little Lemon:</h5>
            </div>
            <div className="confirmation-address">
                <h5>Address: 4601 Lincoln Ave, Chikago, IL</h5>
                <h5>tel: (771) 960-8100, 
                    email: littlelemon@gmail.com</h5>
            </div>
        </div>
    )
}

export default ConfirmationMessage;