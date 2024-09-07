import React from "react";  
import './footer.css';
import  { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="flinks">
                <Link>Website</Link>
                <Link>Users</Link>
                <Link>Coins</Link>
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