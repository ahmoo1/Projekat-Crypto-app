import { useState } from "react";
import { favContext } from "./FavContext";

const FavProvider = ({children}) => {
    const [favItems, setFavItems] = useState([]);
    const [toggledFav, setToggledFav] = useState([])

    const addFavItem = (coin) => {
        setFavItems((prevList) => [...prevList, coin]);
        setToggledFav((prevList) => [...prevList, coin.rank])
    };

    const removeFavItem = (coin) => {
        setFavItems((prevList) => prevList.filter((i) => i !== coin));
        setToggledFav((prevList) => prevList.filter((i) => i !== coin.rank))
    };

    return(
        <favContext.Provider value = {{favItems, addFavItem, removeFavItem, toggledFav}}>
            {children}
        </favContext.Provider>
    )
}

export default FavProvider;