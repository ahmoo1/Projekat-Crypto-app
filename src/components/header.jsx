import React from "react";
import './header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div>
                <nav className="navbar">
                    <div className="logo-container">
                    <img src="src/assets/logo.png" alt="CRYPTO-APP" className="logo" />
                    <p className="logo-text">CRYPTO-APP</p>
                    </div>
                        <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/coins">Coins</Link>
                        <a href="#">Exchanges</a> {/* Treba da bude dodat Exchanges routing poput ostalih linkova*/}
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/favorites">Favorites</Link>
                        </div><Link to="/user">Profile</Link>   
                </nav>
            </div>
        </div>
    )
}

export default Header;