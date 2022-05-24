import React from "react";
import './css/navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <a href="/" className="logo">HomeFinder</a>
            <ul>
                <li className="active"><a href="Landing">Landing</a></li>
                <li className="active"><a href="Rent">Rent</a></li>
                <li className="active"><a href="Property">Property</a></li>
                <li className="active"><a href="about">About..</a></li>
            </ul>
        </div>
    );
}

export default Navbar;