import { useState } from 'react'
import product from '../../../data/products'
import useBreakpoint from '../../../utils/useBreakpoint'
import ProductImagesMobile from './ProductImagesMobile'
import ProductImagesDesktop from './ProductImagesDesktop'

function ProductImages() {
  const { images } = product
  const [selectedImage, setSelectedImage] = useState(images[0])
  const { isAboveLg, isBelowLg } = useBreakpoint('lg')

  return (
    <>
      {isBelowLg && (
        <ProductImagesMobile
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
      {isAboveLg && (
        <ProductImagesDesktop
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  )
}
export default ProductImages
