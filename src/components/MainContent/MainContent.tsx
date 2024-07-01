import ProductImages from './ProductImages/ProductImages'
import TextContent from './TextContent/TextContent'

function MainContent() {
  return (
    <main className="lg:flex lg:gap-[clamp(2.5rem,-22.6215rem+39.2523vi,7.75rem)] lg:px-12 lg:py-[5.625rem]">
      <ProductImages />
      <TextContent />
    </main>
  )
}
export default MainContent
