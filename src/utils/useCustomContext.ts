/* eslint-disable import/prefer-default-export */
import { useContext } from 'react'
import ProductImagesContext from '../context/ProductImagesContext/ProductImagesContext'
import { CartContextType, ProductImagesContextType } from '../@types/types'
import CartContext from '../context/CartContext/CartContext'

export function useProductImagesContext() {
  const context = useContext(ProductImagesContext) as ProductImagesContextType
  if (!context) {
    throw new Error(
      'this useProductImagesContext must be used within his provider',
    )
  }
  return context
}

export function useCartContext() {
  const context = useContext(CartContext) as CartContextType
  if (!context) {
    throw new Error('this useCartContext must be used within his provider')
  }
  return context
}
