import product from '../data/products'

type ImageObj = (typeof product.images)[number]

export type ProductImagesProps = {
  images: ImageObj[]
  selectedImage: ImageObj
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageObj>>
}
