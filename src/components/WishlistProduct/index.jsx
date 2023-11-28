import React, { useContext } from 'react'
import { CiCircleRemove } from 'react-icons/ci'
import './index.scss'
import { WishlistContext } from '../../context/wishlistContext'
import toast, { Toaster } from 'react-hot-toast'

const WishlistProduct = ({ id, image, name, price }) => {
  const { removeFromWishlist } = useContext(WishlistContext)
  const handleRemoveFromBasket = () => {
    removeFromWishlist(id)
  }
  return (
    <div className='wishlist-product'>
      <div className='wishlist-img'>
        <img src={image} alt={name} />
      </div>
      <div className='wishlist-content'>
        <h4>{name}</h4>
        <span>${price}</span>
      </div>
      <span className='remove' onClick={handleRemoveFromBasket}>
        <CiCircleRemove />
      </span>
    </div>
  )
}

export default WishlistProduct
