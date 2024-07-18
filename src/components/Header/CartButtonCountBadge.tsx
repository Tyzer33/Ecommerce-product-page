import { motion, useAnimate, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useCartContext } from '@/utils/useCustomContext'

function CartButtonCountBadge() {
  const { itemsInCart } = useCartContext()
  const shouldReduceMotion = useReducedMotion()
  const isFirstRender = useRef(true)
  const [scope, animate] = useAnimate()

  const variants = {
    hidden: shouldReduceMotion
      ? {
          opacity: 0,
        }
      : {
          opacity: 0,
          x: '-0.25rem',
          y: '0.25rem',
          scale: 0.5,
        },
    visible: shouldReduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 1,
          x: '0',
          y: '0',
          scale: 1,
        },
  }

  /* Animate the badge when the items in cart change (except for the first and last render) */
  useEffect(() => {
    if (itemsInCart === 0 || shouldReduceMotion) return
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    animate(
      scope.current,
      {
        scale: [1, 1.1, 1],
        y: [0, -2, 0],
      },
      {
        duration: 0.3,
      },
    )
  }, [itemsInCart, animate, scope, shouldReduceMotion])

  return (
    <motion.div
      ref={scope}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, type: 'spring' }}
      className="absolute -right-[6px] -top-[6px] flex h-[.8125rem] w-[1.1875rem] items-center justify-center rounded-xl bg-accent text-[.625rem]/[.75rem] font-bold text-white"
    >
      {itemsInCart}
    </motion.div>
  )
}

export default CartButtonCountBadge
