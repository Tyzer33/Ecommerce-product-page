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
  return currentIndex === 0 ? array.length - 1 : currentIndex - 1
}

export function nextIndex(array: unknown[], currentIndex: number) {
  return currentIndex === array.length - 1 ? 0 : currentIndex + 1
}