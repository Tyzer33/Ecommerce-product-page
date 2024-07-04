import { twJoin } from 'tailwind-merge'
import { useRef, useState } from 'react'
import IconCart from '@/components/common/IconCart'
import Cart from './Cart/Cart'

function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const itemsInCart = 0
  const active = isCartOpen || itemsInCart > 0

  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="ml-auto cart-md:relative">
      <button
        type="button"
        className={twJoin(
          'expand-click-sm block transition-colors',
          active ? 'fill-active' : 'fill-current',
          'hover:fill-active focus:outline-none focus-visible:fill-active',
        )}
        onClick={() => setIsCartOpen((prev) => !prev)}
        aria-label="Toggle cart"
        ref={buttonRef}
      >
        <IconCart />
        {itemsInCart > 0 && (
          <div className="absolute -right-[6px] -top-[6px] flex h-[.8125rem] w-[1.1875rem] items-center justify-center rounded-xl bg-accent text-[.625rem]/[.75rem] font-bold text-white">
            {itemsInCart}
          </div>
        )}
      </button>
      {isCartOpen && (
        <Cart buttonRef={buttonRef} closeCart={() => setIsCartOpen(false)} />
      )}
    </div>
  )
}
export default CartButton
