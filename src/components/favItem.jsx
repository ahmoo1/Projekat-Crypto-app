import React, { useContext } from "react";
import { favContext } from "../context/FavContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Snackbar } from '@mui/material';
import './coins.css';

const FavItem = ({coin}) => {
    const {addFavItem, removeFavItem, toggledFav, open, handleClose} = useContext(favContext);
    const isFav = toggledFav.includes(coin.rank) === true;

    const handleFavClick = () => {
        if (isFav) {
            removeFavItem(coin);
        } else {
            addFavItem(coin);
        }
    }

    return(
        <div onClick={handleFavClick}>
            {isFav ? <FavoriteIcon className="heart" fontSize="large"/> : <FavoriteBorderIcon className="heart" fontSize="large"/>}
            <Snackbar
                className="toast"
                open={open}
                autoHideDuration={2500}
                message="❤️Coin added to favorites!"
                onClose={handleClose}
            />
        </div>
    )
}

export default FavItem;

