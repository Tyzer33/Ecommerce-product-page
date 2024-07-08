import { twJoin } from 'tailwind-merge'
import { useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import IconCart from '@/components/common/IconCart'
import Cart from './Cart/Cart'
import { useCartContext } from '@/utils/useCustomContext'

function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { itemsInCart } = useCartContext()

  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="ml-auto cart-md:relative">
      <button
        type="button"
        className={twJoin(
          'block fill-current transition-colors expand-click-sm',
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
      <AnimatePresence>
        {isCartOpen && (
          <Cart buttonRef={buttonRef} closeCart={() => setIsCartOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
export default CartButton
