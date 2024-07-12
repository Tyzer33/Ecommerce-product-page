import { twJoin } from 'tailwind-merge'
import { useProductImagesContext } from '@/utils/useCustomContext'
import { CarouselPrevButton, CarouselNextButton } from './CarouselNavButton'
import ProductThumbnails from './CarouselThumbnails'
import product from '@/data/products'

const { images } = product

function Carousel({
  displayContext,
  handleClick = undefined,
  arrows = false,
  thumbs = false,
}: Props) {
  const { selectedIndex } = useProductImagesContext()

  const WrapperTag = handleClick ? 'button' : 'div'
  const isButton = WrapperTag === 'button'

  const isMobile = displayContext === 'mobile'
  const isDesktop = displayContext === 'desktop'
  const isLightbox = displayContext === 'lightbox'

  return (
    <div
      className={twJoin(
        isDesktop && 'max-w-[27.8125rem] flex-1 space-y-8',
        isLightbox && 'mt-[1.375rem] w-[34.375rem] space-y-10',
      )}
    >
      <WrapperTag
        type={handleClick ? 'button' : undefined}
        className={twJoin(
          'relative block',
          isButton && 'focus-visible:outline-4 focus-visible:outline-accent',
          isDesktop && 'rounded-2xl',
          isLightbox && 'rounded-2xl',
          isMobile && 'bg-black',
        )}
        onClick={handleClick}
      >
        <img
          className={twJoin(
            isDesktop && 'rounded-2xl',
            isLightbox && 'rounded-2xl',
            isMobile && 'm-auto aspect-[375/300] max-h-[31.25rem] object-cover',
          )}
          src={images[selectedIndex].url}
          alt="Selected"
        />
        {arrows && (
          <>
            <CarouselPrevButton
              displayContext={isMobile ? 'mobile' : 'lightbox'}
            />
            <CarouselNextButton
              displayContext={isMobile ? 'mobile' : 'lightbox'}
            />
          </>
        )}
      </WrapperTag>
      {thumbs && (
        <ProductThumbnails className={twJoin(isLightbox && 'mx-[3.25rem]')} />
      )}
    </div>
  )
}
export default Carousel

type Props = {
  displayContext: 'mobile' | 'desktop' | 'lightbox'
  handleClick?: () => void
  arrows?: boolean
  thumbs?: boolean
}
