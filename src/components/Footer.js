import React from 'react';


function Footer () {
    return (
        <div className="main-footer">
            <div className="container">
            <div className="row">
                {/*column1*/}
                <div className="col">
                    <h4>About us</h4>
                    <ul className="list-unstyled">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                {/*column2*/}
                <div className="col">
                    <h4>Contact us:</h4>
                    <ul className="list-unstyled">
                        <li>Address: 4601 Lincoln Ave,</li>
                        <li>Chikago, IL</li>
                        <li>Tel: (771) 960-8100</li>
                        <li>Email:</li>
                        <li>littlelemon@gmail.com</li>
                    </ul>
                </div>
                {/*column3*/}
                <div className="col">
                    <h4>Hours:</h4>
                    <ul className="list-unstyled">
                        <li>Mon-Thurs: 12-10 pm</li>
                        <li>Fri-Sat: 12pm-12am</li>
                        <li>Sun: 12-10 pm</li>
                    </ul>
                </div>
                {/*column4*/}
                <div className="col">
                    <h4>Social media links:</h4>
                    <ul className="list-unstyled">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>X</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;