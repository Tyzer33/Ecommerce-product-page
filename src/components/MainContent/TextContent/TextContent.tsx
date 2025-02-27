import AddToCartControls from './AddToCartControls'
import Price from './Price'
import Text from './Text'

function TextContent() {
  return (
    <section
      aria-label="Product details and purchase options"
      className="max-lg:m-6 lg:mb-4 lg:max-w-[27.75rem] lg:flex-1"
    >
      <Text />
      <Price />
      <AddToCartControls />
    </section>
  )
}
export default TextContent
