import useBreakpoint from '../../../utils/useBreakpoint'
import ProductImagesMobile from './ProductImagesMobile'
import ProductImagesDesktop from './ProductImagesDesktop'
import ProductImagesProvider from '../../../context/ProductImagesProvider'

function ProductImages() {
  const { isAboveLg, isBelowLg } = useBreakpoint('lg')

  return (
    <ProductImagesProvider>
      {isBelowLg && <ProductImagesMobile />}
      {isAboveLg && <ProductImagesDesktop />}
    </ProductImagesProvider>
  )
}
export default ProductImages
