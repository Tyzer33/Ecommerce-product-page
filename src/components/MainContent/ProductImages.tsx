import { useState } from 'react'
import product from '../../data/products'
import ProductImagesNavButton from './ProductImagesNavButton'
import { cycleArray } from '../../utils/functions'

function ProductImages() {
  const { images } = product
  const [selectedImage, setSelectedImage] = useState(images[0])

  function cycleImages(direction: 'prev' | 'next') {
    const index = images.findIndex(({ id }) => id === selectedImage.id)
    const newImage = cycleArray(images, index, direction)
    setSelectedImage(newImage)
  }

  return (
    <div className="relative bg-black">
      <img
        className="m-auto aspect-[375/300] max-h-[31.25rem] object-cover"
        src={selectedImage.url}
        alt="Selected"
      />
      <ProductImagesNavButton
        type="prev"
        handleClick={() => cycleImages('prev')}
      />
      <ProductImagesNavButton
        type="next"
        handleClick={() => cycleImages('next')}
      />
    </div>
  )
}
export default ProductImages
