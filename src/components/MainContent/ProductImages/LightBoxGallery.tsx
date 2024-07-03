import { useProductImagesContext } from '@/utils/useCustomContext'
import IconClose from './IconClose'
import ProductImagesNavButton from './ProductImagesNavButton'
import ProductThumbnails from './ProductThumbnails'

function LightBoxGallery({ closeLightBox }: Props) {
  const { selectedImage } = useProductImagesContext()
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-lightbox">
      <div className="flex flex-col">
        <button
          type="button"
          className="self-end fill-alt hover:fill-accent"
          onClick={closeLightBox}
          aria-label="Close Lightbox Gallery"
        >
          <IconClose />
        </button>
        <div className="relative">
          <img
            className="mb-10 mt-[1.375rem] aspect-square w-[34.375rem] rounded-2xl"
            src={selectedImage.url}
            alt="Selected"
          />
          <ProductImagesNavButton displayContext="lightbox" direction="prev" />
          <ProductImagesNavButton displayContext="lightbox" direction="next" />
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
