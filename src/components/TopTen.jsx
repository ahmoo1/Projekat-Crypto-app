import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Sparklines, SparklinesLine} from 'react-sparklines'
import './coins.css'
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalculateIcon from '@mui/icons-material/Calculate';

const TopTen = () => {
    const [coins,setCoins] = useState([])
    const [sparkline, setSparkline] = useState([])
    const [loading, isLoading] = useState(true)

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '10',
          offset: '0'
        },
        headers: {
          'x-rapidapi-key': '97fa0926d8mshd2f6c1afbea8c77p1f2c0ejsn99d6e5423765',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };

      useEffect (() => {
        const fetchData = async () => {
            try{
                const response = await axios.request(options)
                setCoins(response.data.data.coins)
                setSparkline(response.data.data.coins[0].sparkline)
                isLoading(false)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchData()
      }, [])

      if (loading){
        return (
            <>
            <div className="circularloading">
            <CircularProgress />
            </div>
            </>
        )
    }
  return (
    <>
    <div className="attributescontainer">
  <div className="coinattributes">
    <p className="coinrank">Rank</p>
    <p className="coinfiller"></p>
    <p className="coinname">Name</p>
    <p className="coinsymbol">Symbol</p>
    <p className="coinprice">Price</p>
    <p className="coinvolume">24h Volume</p>
    <p className="marketcap">Market Cap</p>
    <p className="coinfiller"></p>
    <p className="coinfiller"></p>
    <p className="coinfiller"></p>
  </div>
  {coins.map((coin) => (
    <div className="coincontainer">
      <div className="coin" key={coin.uuid}>
        <p className="coinrank">{coin.rank}</p>
        <img className="coinimg" src={coin.iconUrl} alt="" />
        <p className="coinname">{coin.name}</p>
        <p className="coinsymbol">{coin.symbol}</p>
        <p className="coinprice">${new Intl.NumberFormat().format(coin.price)}</p>
        <p className="coinvolume">${new Intl.NumberFormat().format(coin["24hVolume"])}</p>
        <p className="marketcap">${new Intl.NumberFormat().format(coin.marketCap)}</p>
        <div className="sparklines">
          <Sparklines data={sparkline.map(Number)}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <FavoriteBorderIcon className="heart" />
        <CalculateIcon className="calculator" />
      </div>
    </div>
  ))}
</div>
    </>
    )
}

export default TopTen