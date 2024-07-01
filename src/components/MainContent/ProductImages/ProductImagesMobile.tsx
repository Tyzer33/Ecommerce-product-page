import { ProductImagesProps } from '../../../@types/types'
import { cycleArray } from '../../../utils/functions'
import ProductImagesNavButton from './ProductImagesNavButton'

function ProductImagesMobile({
  images,
  selectedImage,
  setSelectedImage,
}: ProductImagesProps) {
  function cycleImages(direction: 'prev' | 'next') {
    const index = images.findIndex(({ id }) => id === selectedImage.id)
    const newImage = cycleArray(images, index, direction)
    setSelectedImage(newImage)
  }

  return (
    <div className="relative bg-black">
      <img
        className="m-auto max-h-[31.25rem] object-cover max-lg:aspect-[375/300]"
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
export default ProductImagesMobile
