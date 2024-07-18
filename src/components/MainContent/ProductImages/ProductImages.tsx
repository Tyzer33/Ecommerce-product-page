import useBreakpoint from '@/utils/useBreakpoint'
import ProductImagesMobile from './ProductImagesMobile'
import ProductImagesDesktop from './ProductImagesDesktop'
import ProductImagesProvider from '@/context/ProductImagesContext/ProductImagesProvider'

function ProductImages() {
  const { isAboveLg, isBelowLg } = useBreakpoint('lg')

  return (
    <ProductImagesProvider>
      <section aria-label="Product images carousel">
        {isBelowLg && <ProductImagesMobile />}
        {isAboveLg && <ProductImagesDesktop />}
      </section>
    </ProductImagesProvider>
  )
}
export default ProductImages
