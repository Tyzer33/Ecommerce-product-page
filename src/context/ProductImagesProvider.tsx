import { useCallback, useMemo, useState } from 'react'
import ProductImagesContext from './ProductImagesContext'
import product from '../data/products'
import { cycleArray } from '../utils/functions'

function ProductImagesProvider({ children }: Props) {
  const { images } = product
  const [selectedImage, setSelectedImage] = useState(images[0])

  const cycleImages = useCallback(
    (direction: 'prev' | 'next') => {
      const index = images.findIndex(({ id }) => id === selectedImage.id)
      const newImage = cycleArray(images, index, direction)
      setSelectedImage(newImage)
    },
    [images, selectedImage],
  )

  const value = useMemo(
    () => ({ selectedImage, setSelectedImage, cycleImages }),
    [selectedImage, cycleImages],
  )

  return (
    <ProductImagesContext.Provider value={value}>
      {children}
    </ProductImagesContext.Provider>
  )
}
export default ProductImagesProvider

type Props = {
  children: React.ReactNode
}
