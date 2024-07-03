import AddButton from './AddButton'
import Counter from './Counter'
import Price from './Price'
import Text from './Text'

function TextContent() {
  return (
    <section className="max-lg:m-6 lg:mt-[clamp(0rem,-18.5421rem+28.972vi,3.875rem)] lg:max-w-[27.75rem] lg:flex-1">
      <Text />
      <Price />
      <div className="flex gap-4 max-lg:flex-col">
        <Counter />
        <AddButton />
      </div>
    </section>
  )
}
export default TextContent
