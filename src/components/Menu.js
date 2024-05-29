import React from 'react';
import BackButton from './BackButton';

function Menu () {
    return (
        <div>
            <div><BackButton></BackButton></div>
            <div className="pages">
                <h3>Menu</h3>
                <h5>This webpage contains information about our menu:</h5>
            </div>
        </div>
    )
}
export default Menu;