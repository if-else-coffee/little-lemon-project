import {Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import Order from './Order';
import Login from './Login';



function Nav () {
    return (
        <nav className="navbar">
            <ul className="navlinks">
                <li className="navitem"><Link to="/home">Home</Link></li>
                <li className="navitem"><Link to="/about">About</Link></li>
                <li className="navitem"><Link to="/menu">Menu</Link></li>
                <li className='navitem'><Link to="/reservations">Reservations</Link></li>
                <li className='navitem'><Link to="/order">Order online</Link></li>
                <li className='navitem'><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;