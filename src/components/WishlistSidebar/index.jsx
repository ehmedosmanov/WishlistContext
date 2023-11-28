import React, { useContext } from 'react'
import './index.scss'
import WishlistProduct from '../WishlistProduct'
import { WishlistContext } from '../../context/wishlistContext'

const WishlistSidebar = ({ isOpen }) => {
  const { items } = useContext(WishlistContext)
  console.log(items)
  return (
    <article className={`${isOpen ? 'open' : ''} sidebar`}>
      <h1>Wishlist</h1>
      <div className='wishlist-products'>
        {items &&
          items.map(wishlistItem => (
            <WishlistProduct
              id={wishlistItem.id}
              image={wishlistItem.image}
              key={wishlistItem.id}
              name={wishlistItem.name}
              price={wishlistItem.price}
            />
          ))}
      </div>
    </article>
  )
}

export default WishlistSidebar
