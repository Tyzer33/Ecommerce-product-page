import { useProductImagesContext } from '@/utils/useCustomContext'
import { CarouselPrevButton, CarouselNextButton } from './CarouselNavButton'
import product from '@/data/products'

const { images } = product

function ProductImagesMobile() {
  const { selectedIndex } = useProductImagesContext()

  return (
    <div className="relative bg-black">
      <img
        className="m-auto max-h-[31.25rem] object-cover max-lg:aspect-[375/300]"
        src={images[selectedIndex].url}
        alt="Selected"
      />
      <CarouselPrevButton displayContext="mobile" />
      <CarouselNextButton displayContext="mobile" />
    </div>
  )
}
export default ProductImagesMobile
