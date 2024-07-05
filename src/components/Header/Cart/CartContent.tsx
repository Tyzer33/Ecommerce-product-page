import { useCartContext } from '@/utils/useCustomContext'
import CartItem from './CartItem'

function CartContent() {
  const { cart, isCartEmpty } = useCartContext()

  if (isCartEmpty) {
    return (
      <div className="flex min-h-[11.75rem] items-center justify-center font-bold">
        Your cart is empty.
      </div>
    )
  }

  return (
    <div className="space-y-[1.625rem] p-6 pb-8">
      {cart.map(({ productRef, quantity }) => (
        <CartItem
          key={productRef}
          productRef={productRef}
          quantity={quantity}
        />
      ))}
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
export default CartContent
