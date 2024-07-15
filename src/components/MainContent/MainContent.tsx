import ProductImages from './ProductImages/ProductImages'
import TextContent from './TextContent/TextContent'

function MainContent() {
  return (
    <main className="lg:flex lg:items-center lg:gap-[clamp(2.5rem,-22.6215rem+39.2523vi,7.75rem)] lg:px-[clamp(0rem,-12rem+18.75vi,3rem)] lg:py-[5.625rem]">
      <ProductImages />
      <TextContent />
    </main>
  )
}
export default MainContent
