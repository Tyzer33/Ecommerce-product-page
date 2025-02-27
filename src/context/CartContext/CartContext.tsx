import { createContext } from 'react'
import { CartContextType } from '@/types/types'

const CartContext = createContext<CartContextType | null>(null)

export default CartContext
