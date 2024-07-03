import { useState } from 'react'
import AddButton from '../TextContent/AddButton'
import Counter from '../TextContent/Counter'

function AddToCartControls() {
  const [quantity, setQuantity] = useState(0)

  function add() {
    setQuantity((prev) => prev + 1)
  }

  function reduce() {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0))
  }

  return (
    <div className="flex gap-4 max-lg:flex-col">
      <Counter quantity={quantity} add={() => add()} reduce={() => reduce()} />
      <AddButton quantity={quantity} />
    </div>
  )
}
export default AddToCartControls
