import AddToCartControls from '../ProductImages/AddToCartControls'
import Price from './Price'
import Text from './Text'

function TextContent() {
  return (
    <section className="max-lg:m-6 lg:mt-[clamp(0rem,-18.5421rem+28.972vi,3.875rem)] lg:max-w-[27.75rem] lg:flex-1">
      <Text />
      <Price />
      <AddToCartControls />
    </section>
  )
}
export default TextContent
