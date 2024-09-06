import { useState } from "react";
import { favContext } from "./FavContext";

const FavProvider = ({children}) => {
    const [favItems, setFavItems] = useState([]);
    const [toggledFav, setToggledFav] = useState([])
    const [open, setOpen] = useState(false);

    const addFavItem = (coin) => {
        setFavItems((prevList) => [...prevList, coin]);
        setToggledFav((prevList) => [...prevList, coin.rank])
        setOpen(true);
    };

    const removeFavItem = (coin) => {
        setFavItems((prevList) => prevList.filter((i) => i !== coin));
        setToggledFav((prevList) => prevList.filter((i) => i !== coin.rank))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return(
        <favContext.Provider value = {{favItems, addFavItem, removeFavItem, toggledFav, open, handleClose}}>
            {children}
        </favContext.Provider>
    )
}

export default FavProvider;