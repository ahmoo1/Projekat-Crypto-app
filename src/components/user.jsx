import React from 'react'
import './user.css'

const User = () => {
  return (
    <div className='userhero'>
      <div className="userleft">
      <h1> But Bitcoin & Crypto</h1>
      <p>Sign up today and <span>buy 50+</span></p>
      <p>cryptotocurrencies in minutes</p>
      <p>Get started with as little as <span>$10</span></p>
      <a href="#">CRYPTO WALLET</a>
      </div>

      <div className="userright">
        <img src="./hero.png" alt="hero" />
      </div>
      
    </div>
  )
}

export default User