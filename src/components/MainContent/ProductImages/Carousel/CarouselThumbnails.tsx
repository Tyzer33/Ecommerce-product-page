import { twJoin } from 'tailwind-merge'
import product from '@/data/products'
import { useProductImagesContext } from '@/utils/useCustomContext'

const { images } = product

function ProductThumbnails({ className = '' }: Props) {
  const { setSelectedIndex, selectedIndex } = useProductImagesContext()

  return (
    <div
      role="radiogroup"
      className={twJoin(
        'flex justify-between rounded-[.625rem]',
        'focus-visible-within:outline focus-visible-within:outline-[.1875rem] focus-visible-within:outline-offset-8 focus-visible-within:outline-accent',
        className,
      )}
    >
      {images.map(({ id, thumbUrl, alt }, index) => (
        <label
          className={twJoin(
            'relative aspect-square w-[5.5rem] cursor-pointer overflow-hidden rounded-[.625rem] transition-[box-shadow] focus-visible:outline-none',
            'after:absolute after:inset-0 after:transition-colors',
            index === selectedIndex
              ? 'ring-2 ring-accent after:bg-thumbnail-active'
              : 'hover:after:bg-thumbnail-hover focus-visible:after:bg-thumbnail-hover',
          )}
          htmlFor={`thumbnail-${id}`}
          key={id}
        >
          <input
            type="radio"
            id={`thumbnail-${id}`}
            name="thumbnail"
            className="sr-only"
            checked={index === selectedIndex}
            onChange={() => setSelectedIndex(index)}
            aria-label={`Select ${alt.toLocaleLowerCase()}`}
          />
          <img src={thumbUrl} alt={alt} />
        </label>
      ))}
    </div>
  )
}
export default ProductThumbnails

type Props = {
  className?: string
}
