import React, { useContext } from "react";
import { favContext } from "../context/FavContext";
import FavItem from "./favItem";
import NoFavs from "../images/No-Favs.png";
import "./favList.css";

const FavList = () => {
    const {favItems} = useContext(favContext);

    return(
        <div className="favlist">
            {favItems.length !== 0 ? <div> {favItems.map((coin) => (
                <div className="favcontainer">
                <div className="favcoin" key={coin.uuid}>
                    <img className="favimg" src={coin.iconUrl} alt="" />
                    <p className="favname">{coin.name}</p>
                    <p className="favsymbol">{coin.symbol}</p>
                    <p className="favprice">${new Intl.NumberFormat().format(coin.price)}</p>
                    <p className="favvolume">${new Intl.NumberFormat().format(coin["24hVolume"])}</p>
                    <p className="favmarketcap">${new Intl.NumberFormat().format(coin.marketCap)}</p>
                    <FavItem className="heart" coin = {coin}/>
                </div>
            </div>
        ))} </div> : <div className="NoFavsContainer"> {<div>
                <img src={NoFavs} alt="" className="NoFavs" />
            <h2 className="NoFavsText">No coins added to favorites</h2>
            </div>} </div>
            }
        </div>
    );
}

export default FavList;