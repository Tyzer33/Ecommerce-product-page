import { useState } from 'react'
import { createPortal } from 'react-dom'
import LightBoxGallery from './LightBoxGallery'
import Carousel from './Carousel/Carousel'

function ProductImagesDesktop() {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)

  return (
    <>
      <Carousel
        displayContext="desktop"
        handleClick={() => setIsLightBoxOpen(true)}
        thumbs
      />
      {isLightBoxOpen &&
        createPortal(
          <LightBoxGallery closeLightBox={() => setIsLightBoxOpen(false)} />,
          document.body,
        )}
    </>
  )
}
export default ProductImagesDesktop
