import { useCartContext } from '@/utils/useCustomContext'
import IconCart from '@/components/common/IconCart'

function AddButton({ quantity }: Props) {
  const { addToCart } = useCartContext()

  return (
    <button
      type="button"
      className="flex h-14 w-full items-center justify-center gap-4 rounded-[.625rem] bg-accent fill-current font-bold text-heading transition-colors hover:bg-accent-hover lg:flex-[5]"
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
