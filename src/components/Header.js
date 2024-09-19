import React from "react";
import "../navbar.css";

function Header(){
    return(
        <header className="navbar">
            <div className="navbar-logo">
                <h1>GM</h1> {/* Logo */}
            </div>
            <nav className="navbar-links">
                <a href="/">Home</a>
                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#about">About us</a>
            </nav>
            <div className="navbar-contact">
                <a href="/contact" className="contact-button">Contact</a>
            </div>
        </header>
    )
}

export default Header;