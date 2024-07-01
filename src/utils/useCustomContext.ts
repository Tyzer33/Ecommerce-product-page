/* eslint-disable import/prefer-default-export */
import { useContext } from 'react'
import ProductImagesContext from '../context/ProductImagesContext'
import { ProductImagesContextType } from '../@types/types'

export function useProductImagesContext() {
  const context = useContext(ProductImagesContext) as ProductImagesContextType
  if (!context) {
    throw new Error(
      'this useProductImagesContext must be used within his provider',
    )
  }
  return context
}
