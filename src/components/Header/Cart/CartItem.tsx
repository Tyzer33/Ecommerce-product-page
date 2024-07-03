import iconDelete from '../../../assets/icon-delete.svg'
import { useCartContext } from '../../../utils/useCustomContext'
import product from '../../../data/products'
import formatter from '../../../utils/formatter'

function CartItem({ productRef, quantity }: Props) {
  const { removeFromCart } = useCartContext()
  const { name, price, discount, images } = product

  return (
    <div className="space-y-[1.625rem] p-6 pb-8">
      <div className="flex items-center gap-4">
        <img
          className="aspect-square h-[3.125rem] rounded-[.25rem]"
          src={images[0].thumbnailUrl}
          alt={name}
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
        >
          <img src={iconDelete} alt="Delete Icon" />
        </button>
      </div>
      <button
        type="button"
        className="h-14 w-full rounded-[.625rem] bg-accent font-bold text-heading"
        onClick={() => console.log('Checkout')}
      >
        Checkout
      </button>
    </div>
  )
}
export default CartItem

type Props = {
  productRef: string
  quantity: number
}
