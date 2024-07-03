import { twMerge } from 'tailwind-merge'
import { useCartContext } from '../../../utils/useCustomContext'
import CartItem from './CartItem'

function Cart() {
  const { cart, isCartEmpty } = useCartContext()

  return (
    <section
      className={twMerge(
        'mx-auto flex w-screen max-w-[22.5rem] flex-col overflow-hidden rounded-xl bg-main shadow-2xl',
        'absolute z-50',
        'left-0 right-0 top-[4.75rem]',
        'cart-md:left-auto cart-md:right-0 cart-md:top-[3.375rem]',
        'lg:left-1/2 lg:top-[3.125rem] lg:-translate-x-1/2',
      )}
    >
      <header className="border-b-1 border-main p-6 pt-4 font-bold text-heading">
        Cart
      </header>
      {isCartEmpty ? (
        <div className="flex min-h-[11.75rem] items-center justify-center font-bold">
          Your cart is empty.
        </div>
      ) : (
        <CartItem />
      )}
    </section>
  )
}
export default Cart
