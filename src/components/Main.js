import {Routes, Route, Navigate} from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';
import { useReducer } from 'react';

function Main () {

    var times = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]

    function initializeTimes () {
        return times
    }

    function updateTimes (state, action) {
        if (action.type === "update_times") {
            console.log(state, action)
            return () => state().filter(e => e !== action.value);
        }
            return state;
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
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} setAvailableTimes={dispatch}/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            </div>
        </main>
    )
}
export default Main;