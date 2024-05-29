import React from 'react';


function Footer () {
    return (
            <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <a href="/home">
                    <img src="/Logo.png"></img>
                    </a>
                </div>
                <div className="footer-column">
                    <ul className="list-unstyled">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6 className="footer-heading">Contact us:</h6>
                    <ul className="list-unstyled">
                        <li>Address: 4601 Lincoln Ave,</li>
                        <li>Chikago, IL</li>
                        <li>Tel: (771) 960-8100</li>
                        <li>Email:</li>
                        <li>littlelemon@gmail.com</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6 className="footer-heading">Hours:</h6>
                    <ul className="list-unstyled">
                        <li>Mon-Thurs: 12-10 pm</li>
                        <li>Fri-Sat: 12pm-12am</li>
                        <li>Sun: 12-10 pm</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6 className="footer-heading">Social media links:</h6>
                    <ul className="list-unstyled">
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-square-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-solid fa-x"></i></a></li>
                    </ul>
                </div>
            </div>
            </footer>
    )
}
export default Footer;