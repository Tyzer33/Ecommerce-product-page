import { useState } from 'react'
import { createPortal } from 'react-dom'
import { ProductImagesProps } from '../../../@types/types'
import ProductThumbnails from './ProductThumbnails'

function ProductImagesDesktop({
  images,
  selectedImage,
  setSelectedImage,
}: ProductImagesProps) {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)

  return (
    <>
      <div className="max-w-[27.8125rem] flex-1 space-y-8">
        <button
          type="button"
          className="block overflow-hidden rounded-2xl"
          onClick={() => setIsLightBoxOpen(true)}
        >
          <img src={selectedImage.url} alt="Selected" />
        </button>
        <ProductThumbnails
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      {isLightBoxOpen &&
        createPortal(<div>Lightbox Gallery</div>, document.body)}
    </>
  )
}
export default ProductImagesDesktop
