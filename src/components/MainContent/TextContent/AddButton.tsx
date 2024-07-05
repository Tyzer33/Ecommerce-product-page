import { useCartContext } from '@/utils/useCustomContext'
import IconCart from '@/components/common/IconCart'
import Button from '@/components/common/Button'

function AddButton({ quantity }: Props) {
  const { addToCart } = useCartContext()

  return (
    <Button
      className="flex items-center justify-center gap-4 fill-current lg:flex-[5]"
      handleClick={() => quantity > 0 && addToCart('553560-093', quantity)}
    >
      <IconCart size="small" />
      Add to cart
    </Button>
  )
}
export default AddButton

type Props = {
  quantity: number
}
