import { twMerge } from 'tailwind-merge'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CartContent from './CartContent'

function Cart({ buttonRef, closeCart }: Props) {
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

    window.addEventListener('mousedown', handleExternalClick)

    return () => {
      window.removeEventListener('mousedown', handleExternalClick)
    }
  }, [closeCart, buttonRef])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
      <CartContent />
    </motion.section>
  )
}
export default Cart

type Props = {
  buttonRef: React.RefObject<HTMLButtonElement>
  closeCart: () => void
}
