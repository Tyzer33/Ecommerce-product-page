import ProductImages from './ProductImages/ProductImages'
import TextContent from './TextContent/TextContent'

function MainContent() {
  return (
    <main className="lg:mx-desktop lg:px-12 lg:py-[5.625rem]">
      <ProductImages />
      <TextContent />
    </main>
  )
}
export default MainContent
