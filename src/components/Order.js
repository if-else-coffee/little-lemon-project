import React from 'react';
import BackButton from './BackButton';

function Order () {
    return (
        <div>
            <div><BackButton></BackButton></div>
            <div className="pages">
                <h3>Order online</h3>
                <h5>You can place your order online here:</h5>
            </div>
        </div>
    )
}
export default Order;