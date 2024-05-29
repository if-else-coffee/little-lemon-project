import React from 'react';
import BackButton from './BackButton';

function About () {
    return (
        <div>
            <div><BackButton></BackButton></div>
            <div className="pages">
                <h3>About</h3>
                <h5>This webpage contains information about our restaurant:</h5>
            </div>
        </div>
    )
}
export default About;