import React, { useContext } from "react";
import { favContext } from "../context/FavContext";
import FavItem from "./favItem";
import NoFavs from "../images/No-Favs.png";
import "./coins.css";

const FavList = () => {
    const {favItems} = useContext(favContext);

    return(
        <div>
            {favItems.length !== 0 ? <div> {favItems.map((coin) => (
                <div className="coincontainer">
                <div className="coin" key={coin.uuid}>
                    <img className="coinimg" src={coin.iconUrl} alt="" />
                    <p className="coinname">{coin.name}</p>
                    <p className="coinsymbol">{coin.symbol}</p>
                    <p className="coinprice">${new Intl.NumberFormat().format(coin.price)}</p>
                    <p className="coinvolume">${new Intl.NumberFormat().format(coin["24hVolume"])}</p>
                    <p className="marketcap">${new Intl.NumberFormat().format(coin.marketCap)}</p>
                    <FavItem className="heart" coin = {coin}/>
                </div>
            </div>
        ))} </div> : <div className="NoFavsContainer"> {<div>
                <img src={NoFavs} alt="" />
            <h1>No coins added to the favorites inventory</h1>
            </div>} </div>
            }
        </div>
    );
}

export default FavList;