import { twJoin } from 'tailwind-merge'
import { motion, useReducedMotion } from 'framer-motion'
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
  const shouldReduceMotion = useReducedMotion()

  const WrapperTag = handleClick ? 'button' : 'div'
  const isButton = WrapperTag === 'button'

  const isMobile = displayContext === 'mobile'
  const isDesktop = displayContext === 'desktop'
  const isLightbox = displayContext === 'lightbox'

  const variants = {
    changeIndex: {
      translate: `${selectedIndex * -100}%`,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        type: 'tween',
      },
    },
  }

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
          isButton &&
            'focus-visible:outline focus-visible:outline-[3px] focus-visible:-outline-offset-1 focus-visible:outline-accent',
          !isMobile && 'rounded-2xl',
          isMobile && 'bg-black',
        )}
        onClick={handleClick}
        aria-label={handleClick ? 'Open lightbox' : undefined}
      >
        <div
          className={twJoin('grid overflow-hidden', !isMobile && 'rounded-2xl')}
          style={{ gridTemplateColumns: `repeat(${images.length}, 100%)` }}
        >
          {images.map(({ id, url, alt }, index) => (
            <motion.div
              key={id}
              variants={variants}
              initial="changeIndex"
              animate="changeIndex"
              aria-hidden={index !== selectedIndex}
            >
              <img
                className={twJoin(
                  isMobile &&
                    'm-auto aspect-[375/300] max-h-[31.25rem] object-cover',
                )}
                src={url}
                alt={alt}
              />
            </motion.div>
          ))}
        </div>
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
