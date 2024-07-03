import { useCallback, useMemo, useState } from 'react'
import CartContext from './CartContext'
import { CartItem } from '../../@types/types'
import { replaceCartItem } from '../../utils/functions'

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = useCallback(
    (productRef: string, quantity: number) => {
      if (quantity === 0) return

      const findIndex = cart.findIndex((item) => item.productRef === productRef)

      if (findIndex === -1) {
        setCart((prev) => [...prev, { productRef, quantity }])
        return
      }

      setCart((prev) => replaceCartItem(prev, findIndex, quantity))
    },
    [cart],
  )

  const removeFromCart = useCallback((productRef: string) => {
    setCart((prev) => prev.filter((item) => item.productRef !== productRef))
  }, [])

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, isCartEmpty: cart.length === 0 }),
    [cart, addToCart, removeFromCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider

type Props = {
  children: React.ReactNode
}
