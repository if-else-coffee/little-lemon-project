import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGroup, faCalendarDays, faChampagneGlasses, faPenToSquare, faClock} from '@fortawesome/free-solid-svg-icons';

function ReservationForm ({availableTimes = [], setAvailableTimes}) {

    const [formData, setFormData] = useState({guests: "1 person", date: "", time: "17:00", occasion: "Birthday", request: " "});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
        if (name === 'time') {
            setAvailableTimes({type: "update_times", value: value})
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log(formData);
        setFormData({guests: "1 person", date: "", time: "17:00", occasion: "Birthday", request: " "})
    }

    return (
        <div className="reservationForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form">
                    <div className="field1">
                        <div className="icon"><FontAwesomeIcon icon={faUserGroup} fixedWidth/></div>
                        <div className="data">
                            <label htmlFor='guests'>Number of guests:</label>
                            <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                            <option>1 person</option>
                            <option>2 people</option>
                            <option>3 people</option>
                            <option>4 people</option>
                            <option>5 people</option>
                            <option>6 people</option>
                            <option>7 people</option>
                            <option>8 people</option>
                            <option>9 people</option>
                            <option>10 people</option>
                            <option>For larger reservations contact us</option>
                            </select>
                        </div>
                    </div>
                    <div className="field2">
                        <div className="icon"><FontAwesomeIcon icon={faCalendarDays} fixedWidth/></div>
                        <div className="data">
                            <div><label htmlFor='date'>Date:</label></div>
                            <div>
                                <input id="date" name="date" type="date" value={formData.date} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="field3">
                        <div className="data">
                            <div><label htmlFor='time'>Time:</label></div>
                            <div>
                            <select id="time" name="time" value={formData.time} onChange={handleChange}>
                                {
                                    availableTimes().map((item, i) => {
                                        return (<option key={item}>{item}</option>)
                                    })
                                }
                            </select>
                            </div>
                        </div>
                        <div className="icon"><FontAwesomeIcon icon={faClock} /></div>
                    </div>
                    <div className="field4">
                        <div className='icon'><FontAwesomeIcon icon={faChampagneGlasses} fixedWidth/></div>
                        <div className="data">
                            <label htmlFor='occasion'>Select occasion (optional):</label>
                            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                            <option>Birthday</option>
                            <option>Business dinner</option>
                            <option>Marriage anniversary</option>
                            <option>Anniversary</option>
                            <option>Family dinner</option>
                            <option>Romantic dinner</option>
                            <option>Dinner with friends</option>
                            <option>Other occasion</option>
                            </select>
                        </div>
                    </div>
                    <div className="field5">
                        <div className="icon"><FontAwesomeIcon icon={faPenToSquare} fixedWidth/></div>
                        <div className="data">
                            <label htmlFor="request">Add special request (optional):</label>
                            <textarea id="request" name="request" value={formData.request} rows="3" maxLength={200} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    </div>
                    <div id="reserve-button2">
                        <button className="button" type="submit">Reserve a table</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default ReservationForm;