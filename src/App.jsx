import React from 'react'
import './App.scss'
import Home from './pages/Home'
import WishlistProvider from './context/wishlistContext'

function App() {
  return (
    <>
      <WishlistProvider>
        <Home />
      </WishlistProvider>
    </>
  )
}

export default App
