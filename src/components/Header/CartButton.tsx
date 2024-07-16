import { twJoin } from 'tailwind-merge'
import { useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import IconCart from '@/components/common/IconCart'
import Cart from './Cart/Cart'
import { useCartContext } from '@/utils/useCustomContext'
import CartButtonCountBadge from './CartButtonCountBadge'

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
        <AnimatePresence>
          {itemsInCart > 0 && <CartButtonCountBadge />}
        </AnimatePresence>
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
