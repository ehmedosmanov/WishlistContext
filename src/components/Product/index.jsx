import React, { useContext } from 'react'
import { CiHeart } from 'react-icons/ci'
import './index.scss'
import { WishlistContext } from '../../context/wishlistContext'
import toast, { Toaster } from 'react-hot-toast'
const Product = ({ id, product, image, name, price }) => {
  const { addToWishlist, removeFromWishlist, items } =
    useContext(WishlistContext)

  const isWishlist = items.some(item => item.id === product.id)

  const handleAddToWishList = () => {
    if (isWishlist) {
      removeFromWishlist(id)
      toast.error('Removed from wishlist')
    } else {
      addToWishlist(product)
      toast.success('Added to wishlist')
    }
  }
  return (
    <div className='product'>
      <div className='product-top'>
        <img src={image} alt={name} />
        <div
          className={`wishlist-btn ${isWishlist ? 'active' : ''}`}
          onClick={handleAddToWishList}>
          <CiHeart />
        </div>
      </div>
      <div className='product-content'>
        <h4>{name}</h4>
        <span>${price}</span>
      </div>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  )
}

export default Product
