import product from '../data/products'

type Image = (typeof product.images)[number]

export type ProductImagesProps = {
  images: Image[]
  selectedImage: Image
  setSelectedImage: React.Dispatch<React.SetStateAction<Image>>
}
