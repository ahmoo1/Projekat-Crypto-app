import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Sparklines, SparklinesLine} from 'react-sparklines'
import './coins.css'
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CalculateIcon from '@mui/icons-material/Calculate';
import FavItem from './favItem';

const CoinsPage = () => {
    const [coins,setCoins] = useState([])
    const [sparkline, setSparkline] = useState([])
    const [loading, isLoading] = useState(true)
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [allCoins, setAllCoins] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '100',
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
                const response = await axios.request(options);
                const startIndex = (page - 1) * 12;
                const endIndex = startIndex + 12;
                const currentCoins = response.data.data.coins.slice(startIndex, endIndex);
                setAllCoins(response.data.data.coins);
                setCoins(currentCoins);
                setSparkline(response.data.data.coins[0].sparkline)
                isLoading(false)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchData()
      }, [page])

      const filteredCoins = allCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase()
      )});

      const totalPages = Math.ceil(filteredCoins.length / 12);

      const pagFilteredCoins = filteredCoins.slice((page - 1) * 12, page * 12);



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
    <input type='text' value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search for a coin..." className='search-bar'></input>
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
  { search === '' ? <div>
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
          <Sparklines data={coin.sparkline.map(Number)}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <FavItem className="heart" coin = {coin}/>
        <CalculateIcon className="calculator" />
      </div>
    </div>
  ))} </div> : <div>
   {pagFilteredCoins.map((coin) => (
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
          <Sparklines data={coin.sparkline.map(Number)}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <FavItem className="heart" coin = {coin}/>
        <CalculateIcon className="calculator" />
      </div>
    </div>
  ))} </div>}
  </div>

  <div className='pagination'>
  <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
  {Array.from({ length: totalPages }, (_, i) => {
          if (i === 0 || i === totalPages - 1) {
            return (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            );
          } else if (i >= page - 2 && i <= page) {
            return (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            );
          } else if (i === page - 3 || i === page + 1) {
            return (
              <button key={i}>...</button>
            );
          } else {
            return null;
          }
        })}
   <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
  </div>
    </>
  )
  }
export default CoinsPage;