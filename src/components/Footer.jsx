import React from "react";  
import './footer.css';
import  { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="flinks">
                <Link to="/">Website</Link>
                <Link to="/user">Users</Link>
                <Link to="/coins">Coins</Link>
                <Link>Exchanges</Link>
            </div>
            <div className="text">
                <p>CryptoApp made by: Dzemil Sahovic, Juns Osmanlic, Ahmed Avdic, Ammar Dolovac</p>
                <p>© 2022 CRYPTO-APP.</p>
            </div>
        </div>
    )
}

export default Footer;