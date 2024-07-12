/* ProductImagesContext */

export type ProductImagesContextType = {
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
  prevImage: () => void
  nextImage: () => void
}

/* CartContext */

export type CartItem = {
  productRef: string
  quantity: number
}

export type CartContextType = {
  cart: CartItem[]
  addToCart: (productRef: string, quantity: number) => void
  removeFromCart: (productRef: string) => void
  isCartEmpty: boolean
  itemsInCart: number
}
