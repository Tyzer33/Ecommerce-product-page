import { twMerge } from 'tailwind-merge'
import { useEffect, useRef } from 'react'
import { useCartContext } from '@/utils/useCustomContext'
import CartItem from './CartItem'

function Cart({ buttonRef, closeCart }: Props) {
  const { cart, isCartEmpty } = useCartContext()
  const cartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleExternalClick(e: MouseEvent) {
      const cartSection = cartRef.current as HTMLDivElement
      const cartButton = buttonRef.current as HTMLButtonElement
      const target = e.target as HTMLElement

      if (cartButton.contains(target)) return
      if (cartSection.contains(target)) return
      closeCart()
    }

    window.addEventListener('click', handleExternalClick)

    return () => {
      window.removeEventListener('click', handleExternalClick)
    }
  }, [closeCart, buttonRef])

  return (
    <section
      className={twMerge(
        'mx-auto flex w-screen max-w-[22.5rem] flex-col overflow-hidden rounded-xl bg-main shadow-2xl',
        'absolute z-50',
        'left-0 right-0 top-[4.75rem]',
        'cart-md:left-auto cart-md:right-0 cart-md:top-[3.375rem]',
        'lg:left-1/2 lg:top-[3.125rem] lg:-translate-x-1/2',
      )}
      ref={cartRef}
    >
      <header className="border-b-1 border-main p-6 pt-4 font-bold text-heading">
        Cart
      </header>
      {isCartEmpty ? (
        <div className="flex min-h-[11.75rem] items-center justify-center font-bold">
          Your cart is empty.
        </div>
      ) : (
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
      )}
    </section>
  )
}
export default Cart

type Props = {
  buttonRef: React.RefObject<HTMLButtonElement>
  closeCart: () => void
}
