import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGroup, faCalendarDays, faChampagneGlasses, faPenToSquare, faClock} from '@fortawesome/free-solid-svg-icons';



export function ErrorMessage ({value, isChanged}) {
    console.log(value);
    if (isChanged && value == "") {
        return (<p>*Please make selection</p>)
    }
}

export const isFormValid = (formData) => {
    // if all values are empty, we get False. !False => True, so disabled attribute will be true
    return formData.guests !== "" && formData.date !== "" && formData.time !== "" && formData.occasion !== ""
    
}


export function ReservationForm ({availableTimes = [], setAvailableTimes, submitForm}) {


    const [formData, setFormData] = useState({guests: '', date: '', time: '', occasion: '', request: ''});
    const [formDataChanges, setIsChanged] = useState({guests: false, date: false, time: false, occasion: false, request: false});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
        if (name === 'time') {
            setAvailableTimes({type: "update_times", value: value})
        }
        if (name === 'date') {
            setAvailableTimes({type: "update_date", value: value})
        }
        formDataChanges[name] = true
        setIsChanged(formDataChanges)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log(formData);
        submitForm(formData)
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
                            <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required>
                                <option value="">Select number of guests</option>
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                                <option value="7">7 people</option>
                                <option value="8">8 people</option>
                                <option value="9">9 people</option>
                                <option value="10">For larger reservations contact us</option>
                            </select>
                            <div className="fieldError"><ErrorMessage value={formData.guests} isChanged={formDataChanges.guests}/></div>
                        </div>
                    </div>
                    <div className="field2">
                        <div className="icon"><FontAwesomeIcon icon={faCalendarDays} fixedWidth/></div>
                        <div className="data">
                            <div><label htmlFor='date'>Date:</label></div>
                            <div>
                                <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required/>
                            </div>
                            <div className="fieldError"><ErrorMessage value={formData.date} isChanged={formDataChanges.date}/></div>
                        </div>
                    </div>
                    <div className="field3">
                        <div className="data">
                            <div><label htmlFor='time'>Time:</label></div>
                            <div>
                            <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                                <option value="">Select time</option>
                                {
                                    availableTimes().map((item, i) => {
                                        return (<option value={item} key={i}>{item}</option>)
                                    })
                                }
                            </select>
                            </div>
                            <div className="fieldError"><ErrorMessage value={formData.time} isChanged={formDataChanges.time}/></div>
                        </div>
                        <div className="icon"><FontAwesomeIcon icon={faClock} /></div>
                    </div>
                    <div className="field4">
                        <div className='icon'><FontAwesomeIcon icon={faChampagneGlasses} fixedWidth/></div>
                        <div className="data">
                            <label htmlFor='occasion'>Select occasion:</label>
                            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                            <option value="">Select occasion</option>
                            <option>Birthday</option>
                            <option>Business dinner</option>
                            <option>Marriage anniversary</option>
                            <option>Anniversary</option>
                            <option>Family dinner</option>
                            <option>Romantic dinner</option>
                            <option>Dinner with friends</option>
                            <option>Other occasion</option>
                            </select>
                            <div className="fieldError"><ErrorMessage value={formData.occasion} isChanged={formDataChanges.occasion}/></div>
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
                        <button className="button" type="submit" disabled={!isFormValid(formData)}>Reserve a table</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default ReservationForm;