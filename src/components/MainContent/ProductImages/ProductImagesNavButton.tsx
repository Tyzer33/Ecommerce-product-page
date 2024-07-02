import { twJoin } from 'tailwind-merge'
import { useProductImagesContext } from '../../../utils/useCustomContext'
import { IconNext, IconPrev } from './IconsArrows'

function ProductImagesNavButton({ displayContext, direction }: Props) {
  const { cycleImages } = useProductImagesContext()
  const isPrev = direction === 'prev'
  const isNext = direction === 'next'
  const isMobile = displayContext === 'mobile'
  const isLightbox = displayContext === 'lightbox'

  return (
    <button
      type="button"
      className={twJoin(
        'absolute top-1/2 flex aspect-square -translate-y-1/2 items-center justify-center rounded-full bg-main stroke-current text-heading hover:stroke-accent',
        isMobile && 'w-10',
        isLightbox && 'w-14',
        isMobile && isPrev && 'left-4',
        isMobile && isNext && 'right-4',
        isLightbox && isPrev && 'left-0 -translate-x-1/2',
        isLightbox && isNext && 'right-0 translate-x-1/2',
      )}
      onClick={() => cycleImages(direction)}
      aria-label={`${isPrev ? 'Previous' : 'Next'} image`}
    >
      {isPrev && <IconPrev displayContext={displayContext} />}
      {isNext && <IconNext displayContext={displayContext} />}
    </button>
  )
}
export default ProductImagesNavButton

type Props = {
  displayContext: 'mobile' | 'lightbox'
  direction: 'prev' | 'next'
}
