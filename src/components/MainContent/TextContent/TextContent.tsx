import { useState } from 'react'
import product from '../../../data/products'
import IconCart from '../../common/IconCart'
import IconPlus from './IconPlus'
import IconMinus from './IconMinus'

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
        <div>
          <span>{formatter.format(price * discount)}</span>
          <span>{discount * 100}%</span>
        </div>
        <span>{formatter.format(price)}</span>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          aria-label="minus"
        >
          <IconMinus />
        </button>
        <span>{count}</span>
        <button
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          aria-label="plus"
        >
          <IconPlus />
        </button>
      </div>
      <button type="button">
        <IconCart /> Add to cart
      </button>
    </section>
  )
}
export default TextContent
