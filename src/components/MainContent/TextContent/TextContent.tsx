import { useState } from 'react'
import product from '../../../data/products'

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
          {price * discount}
          <span>{discount * 100}%</span>
        </p>
        <span>{price}</span>
      </div>
      <div>
        <button type="button">-</button>
        <span>{count}</span>
        <button type="button">+</button>
      </div>
      <button type="button">add to cart</button>
    </section>
  )
}
export default TextContent
