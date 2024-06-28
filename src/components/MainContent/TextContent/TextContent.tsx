import { useState } from 'react'
import product from '../../../data/products'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function TextContent() {
  const [count, setCount] = useState(0)
  const { brand, name, desc, price, discount } = product

  return (
    <section>
      <h2>{brand}</h2>
      <h1>{name}</h1>
      <p>{desc}</p>
      <div>
        <p>
          {formatter.format(price * discount)}
          <span>{discount * 100}%</span>
        </p>
        <span>{formatter.format(price)}</span>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
      </div>
      <button type="button">add to cart</button>
    </section>
  )
}
export default TextContent
