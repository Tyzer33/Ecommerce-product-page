import product from '../data/products'

type ImageObj = (typeof product.images)[number]

export type ProductImagesProps = {
  images: ImageObj[]
  selectedImage: ImageObj
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageObj>>
}

export type ProductImagesContextType = {
  selectedImage: ImageObj
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageObj>>
  cycleImages: (direction: 'prev' | 'next') => void
}

export type CartContextType = {}
