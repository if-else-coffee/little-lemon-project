import {Routes, Route, Navigate} from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';
import { useReducer } from 'react';
import ConfirmedReservation from "./ConfirmedReservation";
import { useNavigate } from "react-router-dom";


const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};


const submitAPI = function(formData) {
    return true;
};

export function initializeTimes () {
    const date = new Date();
    return fetchAPI(date)
}

export function updateTimes (state, action) {
    console.log(action)
    // if (action.type === "update_times") {
    //     const date = new Date();
    //     return () => state().filter(e => e !== action.value);
    // }
    if (action.type === "update_date") {
        return () => fetchAPI(new Date(action.value))
    }
    return state;
}

function Main () {

    const navigate = useNavigate();

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmation");
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);


    return (
        <main>
            <div className="main-container">
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} setAvailableTimes={dispatch} submitForm={submitForm}/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirmation" element={<ConfirmedReservation/>}/>
            </Routes>
            </div>
        </main>
    )
}
export default Main;