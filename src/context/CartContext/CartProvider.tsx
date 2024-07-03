import { useMemo } from 'react'
import CartContext from './CartContext'

function CartProvider({ children }: Props) {
  const value = useMemo(() => ({}), [])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider

type Props = {
  children: React.ReactNode
}
