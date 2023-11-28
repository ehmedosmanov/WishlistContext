import React, { useState } from 'react'
import './index.scss'
import OurProducts from '../../components/OurProducts'
import WishlistSidebar from '../../components/WishlistSidebar'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <OurProducts handleToggle={handleToggle} />
      <WishlistSidebar isOpen={isOpen} />
    </>
  )
}

export default Home
