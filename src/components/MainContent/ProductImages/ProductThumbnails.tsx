import { twJoin } from 'tailwind-merge'
import product from '../../../data/products'

function ProductThumbnails({ images, selectedImage, setSelectedImage }: Props) {
  return (
    <div className="flex justify-between">
      {images.map((image) => (
        <button
          key={image.id}
          className={twJoin(
            'relative aspect-square w-[5.5rem] overflow-hidden rounded-[.625rem] transition-[box-shadow] focus-visible:outline-none',
            'after:absolute after:inset-0 after:transition-colors',
            selectedImage.id === image.id
              ? 'ring-2 ring-accent after:bg-thumbnail-active'
              : 'hover:after:bg-thumbnail-hover focus-visible:after:bg-thumbnail-hover',
          )}
          type="button"
          onClick={() => setSelectedImage(image)}
          aria-label={`Select image ${image.id}`}
        >
          <img src={image.thumbnailUrl} alt={`Product Thumbnail ${image.id}`} />
        </button>
      ))}
    </div>
  )
}
export default ProductThumbnails

type Image = (typeof product.images)[number]

type Props = {
  images: Image[]
  selectedImage: Image
  setSelectedImage: React.Dispatch<React.SetStateAction<Image>>
}
