import { useCallback, useMemo, useState } from 'react'
import ProductImagesContext from './ProductImagesContext'
import product from '@/data/products'
import { nextIndex, prevIndex } from '@/utils/functions'

const { images } = product

function ProductImagesProvider({ children }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const prevImage = useCallback(
    () => setSelectedIndex((prev) => prevIndex(images, prev)),
    [],
  )

  const nextImage = useCallback(
    () => setSelectedIndex((prev) => nextIndex(images, prev)),
    [],
  )

  const value = useMemo(
    () => ({ selectedIndex, setSelectedIndex, prevImage, nextImage }),
    [selectedIndex, setSelectedIndex, prevImage, nextImage],
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
