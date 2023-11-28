import { createContext, useReducer, useState } from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'

export const WishlistContext = createContext()

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocaleStorage('wishlist')

  const initialValue = {
    items: wishlist
  }

  const [state, dispatch] = useReducer(wishlistReducer, initialValue)

  const addToWishlist = item => {
    const findWishlistProduct = state.items.find(x => x.id === item.id)
    if (findWishlistProduct) {
      removeFromWishlist(item.id)
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: item })
      setWishlist([...wishlist, item])
    }
  }

  const removeFromWishlist = itemId => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: itemId })
    setWishlist(state.items.filter(item => item.id !== itemId))
  }

  const data = {
    items: state.items,
    addToWishlist,
    removeFromWishlist
  }
  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider
