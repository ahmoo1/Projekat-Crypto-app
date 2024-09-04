import React, { useContext } from "react";
import { favContext } from "../context/FavContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavItem = ({coin}) => {
    const {addFavItem, removeFavItem, toggledFav} = useContext(favContext);
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
            {isFav ? <FavoriteIcon/> : <FavoriteBorderIcon />}
        </div>
    )
}

export default FavItem;

