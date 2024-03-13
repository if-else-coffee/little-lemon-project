import {Routes, Route, Navigate} from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';

function Main () {
    return (
        <main>
            <div className="main-container">
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/reservations" element={<Reservations/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            </div>
        </main>
    )
}
export default Main;