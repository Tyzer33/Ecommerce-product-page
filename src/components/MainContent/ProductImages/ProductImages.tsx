import { useState } from 'react'
import product from '../../../data/products'
import ProductImagesNavButton from './ProductImagesNavButton'
import { cycleArray } from '../../../utils/functions'
import useBreakpoint from '../../../utils/useBreakpoint'
import ProductThumbnails from './ProductThumbnails'

function ProductImages() {
  const { images } = product
  const [selectedImage, setSelectedImage] = useState(images[0])
  const { isAboveLg, isBelowLg } = useBreakpoint('lg')

  function cycleImages(direction: 'prev' | 'next') {
    const index = images.findIndex(({ id }) => id === selectedImage.id)
    const newImage = cycleArray(images, index, direction)
    setSelectedImage(newImage)
  }

  return (
    <div className="relative max-lg:bg-black lg:max-w-[27.8125rem] lg:flex-1 lg:space-y-8">
      <img
        className="m-auto max-h-[31.25rem] object-cover max-lg:aspect-[375/300] lg:rounded-2xl"
        src={selectedImage.url}
        alt="Selected"
      />
      {isBelowLg && (
        <>
          <ProductImagesNavButton
            type="prev"
            handleClick={() => cycleImages('prev')}
          />
          <ProductImagesNavButton
            type="next"
            handleClick={() => cycleImages('next')}
          />
        </>
      )}
      {isAboveLg && (
        <ProductThumbnails
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  )
}
export default ProductImages
