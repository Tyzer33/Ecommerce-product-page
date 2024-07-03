import { createContext } from 'react'
import { ProductImagesContextType } from '@/types/types'

const ProductImagesContext = createContext<ProductImagesContextType | null>(
  null,
)

export default ProductImagesContext
