import { useCartContext } from '@/utils/useCustomContext'
import product from '@/data/products'
import formatter from '@/utils/formatter'
import IconDelete from './IconDelete'

const { name, price, discount, images } = product

function CartItem({ productRef, quantity }: Props) {
  const { removeFromCart } = useCartContext()

  return (
    <div className="flex items-center gap-4">
      <img
        className="aspect-square h-[3.125rem] rounded-[.25rem]"
        src={images[0].thumbUrl}
        alt={`${name} thumbnail`}
      />
      <div className="flex-1">
        <p>{name}</p>
        <div className="flex gap-[.375rem]">
          <p>{`${formatter.format(price * discount)} x ${quantity}`}</p>
          <p className="font-bold text-heading">{`${formatter.format(price * discount * quantity)}`}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => removeFromCart(productRef)}
        aria-label="delete"
        className="fill-[#C3CAD9] transition-colors hover:fill-[#9ba0aa] focus-visible:fill-[#9ba0aa] focus-visible:outline-none"
      >
        <IconDelete />
      </button>
    </div>
  )
}
export default CartItem

type Props = {
  productRef: string
  quantity: number
}
