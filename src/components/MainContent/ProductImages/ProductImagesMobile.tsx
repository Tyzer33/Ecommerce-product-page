import { useProductImagesContext } from '@/utils/useCustomContext'
import ProductImagesNavButton from './ProductImagesNavButton'
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
      <ProductImagesNavButton displayContext="mobile" direction="prev" />
      <ProductImagesNavButton displayContext="mobile" direction="next" />
    </div>
  )
}
export default ProductImagesMobile
