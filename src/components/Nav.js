import {Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';



function Nav () {
    return (
        <div >
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
        </div>
    )
}
export default Nav;