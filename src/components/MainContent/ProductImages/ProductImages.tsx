import { useState } from 'react'
import { twJoin } from 'tailwind-merge'
import product from '../../../data/products'
import ProductImagesNavButton from './ProductImagesNavButton'
import { cycleArray } from '../../../utils/functions'
import useBreakpoint from '../../../utils/useBreakpoint'

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
    <div className="relative max-lg:bg-black lg:max-w-[27.8125rem] lg:space-y-8">
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
        <div className="flex justify-between">
          {images.map((image) => (
            <button
              key={image.id}
              className={twJoin(
                'relative aspect-square w-[5.5rem] overflow-hidden rounded-[.625rem] transition-[box-shadow] focus-visible:outline-none',
                'after:absolute after:inset-0 after:transition-colors',
                selectedImage.id === image.id
                  ? 'ring-accent after:bg-thumbnail-active ring-2'
                  : 'hover:after:bg-thumbnail-hover focus-visible:after:bg-thumbnail-hover',
              )}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Select image ${image.id}`}
            >
              <img
                src={image.thumbnailUrl}
                alt={`Product Thumbnail ${image.id}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
export default ProductImages
