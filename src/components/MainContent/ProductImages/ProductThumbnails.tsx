import { twJoin } from 'tailwind-merge'
import product from '@/data/products'
import { useProductImagesContext } from '@/utils/useCustomContext'

const { images } = product

function ProductThumbnails({ className = '' }: Props) {
  const { setSelectedIndex, selectedIndex } = useProductImagesContext()

  return (
    <div className={twJoin('flex justify-between', className)}>
      {images.map(({ id, thumbUrl }, index) => (
        <button
          key={id}
          className={twJoin(
            'relative aspect-square w-[5.5rem] overflow-hidden rounded-[.625rem] transition-[box-shadow] focus-visible:outline-none',
            'after:absolute after:inset-0 after:transition-colors',
            index === selectedIndex
              ? 'ring-2 ring-accent after:bg-thumbnail-active'
              : 'hover:after:bg-thumbnail-hover focus-visible:after:bg-thumbnail-hover',
          )}
          type="button"
          onClick={() => setSelectedIndex(index)}
          aria-label={`Select image ${id}`}
        >
          <img src={thumbUrl} alt={`Product Thumbnail ${id}`} />
        </button>
      ))}
    </div>
  )
}
export default ProductThumbnails

type Props = {
  className?: string
}
