import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FavProvider from './context/favProvider.jsx'
import App from './App.jsx'
import './index.css'
import React from 'react' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavProvider>
      <App />
    </FavProvider>
  </StrictMode>,
)
