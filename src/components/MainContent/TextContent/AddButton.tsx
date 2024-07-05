import { twJoin } from 'tailwind-merge'
import { useCartContext } from '@/utils/useCustomContext'
import IconCart from '@/components/common/IconCart'

function AddButton({ quantity }: Props) {
  const { addToCart } = useCartContext()

  return (
    <button
      type="button"
      className={twJoin(
        'flex h-14 w-full items-center justify-center gap-4 rounded-[.625rem] bg-accent fill-current font-bold text-heading transition-colors lg:flex-[5]',
        'focus-within:bg-accent-hover focus-within:outline-none hover:bg-accent-hover',
      )}
      onClick={() => quantity > 0 && addToCart('553560-093', quantity)}
    >
      <IconCart size="small" />
      Add to cart
    </button>
  )
}
export default AddButton

type Props = {
  quantity: number
}
