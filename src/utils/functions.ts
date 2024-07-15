import { CartItem } from '@/types/types'

export function replaceCartItem(cart: CartItem[], index: number, qty: number) {
  return cart.map((item, i) => {
    if (index === i) {
      return { ...item, quantity: item.quantity + qty }
    }

    return item
  })
}

export function prevIndex(array: unknown[], currentIndex: number) {
  if (currentIndex === 0) return array.length - 1
  return currentIndex - 1
}

export function nextIndex(array: unknown[], currentIndex: number) {
  if (currentIndex === array.length - 1) return 0
  return currentIndex + 1
}