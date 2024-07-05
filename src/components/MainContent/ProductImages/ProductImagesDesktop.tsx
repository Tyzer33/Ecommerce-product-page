import { useState } from 'react'
import { createPortal } from 'react-dom'
import ProductThumbnails from './ProductThumbnails'
import LightBoxGallery from './LightboxGallery'
import { useProductImagesContext } from '@/utils/useCustomContext'

function ProductImagesDesktop() {
  const { selectedImage } = useProductImagesContext()
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)

  return (
    <>
      <div className="max-w-[27.8125rem] flex-1 space-y-8">
        <button
          type="button"
          className="block overflow-hidden rounded-2xl focus-visible:outline-4 focus-visible:outline-accent"
          onClick={() => setIsLightBoxOpen(true)}
        >
          <img src={selectedImage.url} alt="Selected" />
        </button>
        <ProductThumbnails />
      </div>
      {isLightBoxOpen &&
        createPortal(
          <LightBoxGallery closeLightBox={() => setIsLightBoxOpen(false)} />,
          document.body,
        )}
    </>
  )
}
export default ProductImagesDesktop
