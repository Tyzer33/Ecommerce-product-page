import { useEffect } from 'react'
import { useProductImagesContext } from '@/utils/useCustomContext'
import IconClose from './IconClose'
import { CarouselPrevButton, CarouselNextButton } from './CarouselNavButton'
import ProductThumbnails from './ProductThumbnails'
import product from '@/data/products'

const { images } = product

function LightBoxGallery({ closeLightBox }: Props) {
  const { selectedIndex } = useProductImagesContext()

  useEffect(() => {
    const divRoot = document.getElementById('root')
    divRoot?.setAttribute('inert', 'true')

    return () => {
      divRoot?.removeAttribute('inert')
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-lightbox">
      <div className="flex flex-col">
        <button
          type="button"
          className="self-end fill-alt transition-colors expand-click-sm focus-within:fill-accent focus-within:outline-none hover:fill-accent"
          onClick={closeLightBox}
          aria-label="Close Lightbox Gallery"
        >
          <IconClose size="large" />
        </button>
        <div className="relative">
          <img
            className="mb-10 mt-[1.375rem] aspect-square w-[34.375rem] rounded-2xl"
            src={images[selectedIndex].url}
            alt="Selected"
          />
          <CarouselPrevButton displayContext="lightbox" />
          <CarouselNextButton displayContext="lightbox" />
        </div>
        <ProductThumbnails className="mx-[3.25rem]" />
      </div>
    </div>
  )
}
export default LightBoxGallery

type Props = {
  closeLightBox: () => void
}
