import React, { useContext, useState } from 'react'
import './index.scss'
import Product from '../Product'
import useFetch from '../../hooks/useFetch'
import { WishlistContext } from '../../context/wishlistContext'

const OurProducts = ({ handleToggle }) => {
  const baseUrl = 'http://localhost:3000/products'
  const { data, loading } = useFetch(baseUrl)
  const { items } = useContext(WishlistContext)

  if (!loading) {
    return <p>...Loading</p>
  }

  return (
    <section id='our-products'>
      <div className='container'>
        <div className='our-products__title'>
          <h3>Our Products</h3>
          <button className='wishlist' onClick={handleToggle}>
            Wishlist
          </button>
          <span>{items.length}</span>
        </div>
        <div className='products'>
          {data &&
            data.map(product => (
              <Product
                id={product.id}
                product={product}
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default OurProducts
