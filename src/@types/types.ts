import product from '../data/products'

/* ProductImagesContext */

type ImageObj = (typeof product.images)[number]

export type ProductImagesContextType = {
  selectedImage: ImageObj
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageObj>>
  cycleImages: (direction: 'prev' | 'next') => void
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
}
