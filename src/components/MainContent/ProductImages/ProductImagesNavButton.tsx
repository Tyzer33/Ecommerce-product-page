import { twJoin } from 'tailwind-merge'
import iconNext from '../../../assets/icon-next.svg'
import iconPrev from '../../../assets/icon-previous.svg'

function ProductImagesNavButton({ type, handleClick }: Props) {
  const icon = type === 'prev' ? iconPrev : iconNext

  return (
    <button
      className={twJoin(
        'absolute top-1/2 aspect-square w-10 -translate-y-1/2 rounded-full bg-main bg-center bg-no-repeat',
        type === 'prev' ? 'left-4' : 'right-4',
      )}
      style={{ backgroundImage: `url(${icon})` }}
      type="button"
      onClick={handleClick}
      aria-label="Previous image"
    />
  )
}
export default ProductImagesNavButton

type Props = {
  type: 'prev' | 'next'
  handleClick: () => void
}
