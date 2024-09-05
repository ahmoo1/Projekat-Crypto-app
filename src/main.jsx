import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FavProvider from './context/favProvider.jsx'
import './index.css'
import React from 'react' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Coins from './pages/Coins.jsx'
import Favorites from './pages/Favorites.jsx'
import AboutUs from './pages/About.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "/coins",
    element : <Coins />
  },
  {
    path : "/favorites",
    element : <Favorites />
  },
  {
    path : "/user",
    element : <Profile />
  },
  {
    path : "/aboutus",
    element : <AboutUs />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavProvider>
      <RouterProvider router={router} />
    </FavProvider>
  </StrictMode>,
)
