import image1 from '@/assets/image-product-1.jpg'
import thumbnail1 from '@/assets/image-product-1-thumbnail.jpg'
import image2 from '@/assets/image-product-2.jpg'
import thumbnail2 from '@/assets/image-product-2-thumbnail.jpg'
import image3 from '@/assets/image-product-3.jpg'
import thumbnail3 from '@/assets/image-product-3-thumbnail.jpg'
import image4 from '@/assets/image-product-4.jpg'
import thumbnail4 from '@/assets/image-product-4-thumbnail.jpg'

const product = {
  ref: '553560-093',
  name: 'Fall Limited Edition Sneakers',
  brand: 'Sneaker Company',
  desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 250,
  discount: 0.5,
  images: [
    {
      id: 1,
      url: image1,
      thumbUrl: thumbnail1,
      alt: 'First image of the product',
    },
    {
      id: 2,
      url: image2,
      thumbUrl: thumbnail2,
      alt: 'Second image of the product',
    },
    {
      id: 3,
      url: image3,
      thumbUrl: thumbnail3,
      alt: 'Third image of the product',
    },
    {
      id: 4,
      url: image4,
      thumbUrl: thumbnail4,
      alt: 'Fourth image of the product',
    },
  ],
}

export default product
