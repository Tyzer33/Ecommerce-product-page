import { twJoin } from 'tailwind-merge'
import { useProductImagesContext } from '@/utils/useCustomContext'
import { IconNext, IconPrev } from './IconsArrows'

function CarouselNavButton({
  children,
  className = '',
  displayContext,
  handleClick,
}: BaseProps) {
  const isMobile = displayContext === 'mobile'
  const isLightbox = displayContext === 'lightbox'

  return (
    <button
      type="button"
      className={twJoin(
        'absolute top-1/2 flex aspect-square -translate-y-1/2 items-center justify-center rounded-full bg-main stroke-current text-heading transition-colors',
        'hover:stroke-accent focus-visible:stroke-accent focus-visible:outline-none',
        isMobile && 'w-10',
        isLightbox && 'w-14',
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

type BaseProps = {
  children: React.ReactNode
  className?: string
  displayContext: 'mobile' | 'lightbox'
  handleClick: () => void
}

export function CarouselPrevButton({ displayContext }: PrevNextProps) {
  const { prevImage } = useProductImagesContext()
  const isMobile = displayContext === 'mobile'
  const isLightbox = displayContext === 'lightbox'

  return (
    <CarouselNavButton
      className={twJoin(
        isMobile && 'left-4',
        isLightbox && 'left-0 -translate-x-1/2',
      )}
      displayContext={displayContext}
      handleClick={prevImage}
    >
      <IconPrev displayContext={displayContext} />
    </CarouselNavButton>
  )
}

export function CarouselNextButton({ displayContext }: PrevNextProps) {
  const { nextImage } = useProductImagesContext()
  const isMobile = displayContext === 'mobile'
  const isLightbox = displayContext === 'lightbox'

  return (
    <CarouselNavButton
      className={twJoin(
        isMobile && 'right-4',
        isLightbox && 'right-0 translate-x-1/2',
      )}
      displayContext={displayContext}
      handleClick={nextImage}
    >
      <IconNext displayContext={displayContext} />
    </CarouselNavButton>
  )
}

type PrevNextProps = {
  displayContext: 'mobile' | 'lightbox'
}
