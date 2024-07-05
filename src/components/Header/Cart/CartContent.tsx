import { useCartContext } from '@/utils/useCustomContext'
import CartItem from './CartItem'
import Button from '@/components/common/Button'

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
      <Button handleClick={() => console.log('Checkout')}>Checkout</Button>
    </div>
  )
}
export default CartContent
