import { motion } from 'framer-motion'
import { useCartContext } from '@/utils/useCustomContext'

function CartButtonCountBadge() {
  const { itemsInCart } = useCartContext()

  return (
    <motion.div
      initial={{ opacity: 0, x: '-0.25rem', y: '0.25rem', scale: 0.5 }}
      animate={{ opacity: 1, x: '0', y: '0', scale: 1 }}
      exit={{ opacity: 0, x: '-0.25rem', y: '0.25rem', scale: 0.5 }}
      transition={{ duration: 0.3, type: 'spring' }}
      className="absolute -right-[6px] -top-[6px] flex h-[.8125rem] w-[1.1875rem] items-center justify-center rounded-xl bg-accent text-[.625rem]/[.75rem] font-bold text-white"
    >
      {itemsInCart}
    </motion.div>
  )
}
export default CartButtonCountBadge
