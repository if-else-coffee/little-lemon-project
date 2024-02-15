import logo from '../images/Logo.png';
import Nav from './Nav';
function Header () {
    return (
        <header>
            <div>
                <a href="/home">
                <img src={logo}></img>
                </a>
            </div>
            <Nav></Nav>
        </header>
    )
}
export default Header;