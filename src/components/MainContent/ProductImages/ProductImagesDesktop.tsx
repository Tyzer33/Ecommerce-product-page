import { ProductImagesProps } from '../../../@types/types'
import ProductThumbnails from './ProductThumbnails'

function ProductImagesDesktop({
  images,
  selectedImage,
  setSelectedImage,
}: ProductImagesProps) {
  return (
    <div className="max-w-[27.8125rem] flex-1 space-y-8">
      <button type="button" className="block overflow-hidden rounded-2xl">
        <img src={selectedImage.url} alt="Selected" />
      </button>
      <ProductThumbnails
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  )
}
export default ProductImagesDesktop
