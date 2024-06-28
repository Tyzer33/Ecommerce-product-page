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
    <section className="m-6">
      <h2>{brand}</h2>
      <h1 className="mb-4 mt-3">{name}</h1>
      <p>{desc}</p>
      <div className="my-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[1.75rem] font-bold tracking-[0.035em] text-heading">
            {formatter.format(price * discount)}
          </span>
          <span className="text-badge bg-badge rounded-md px-[.625rem] py-1 text-base font-bold">
            {discount * 100}%
          </span>
        </div>
        <span className="font-bold tracking-[0.02em] line-through">
          {formatter.format(price)}
        </span>
      </div>
      <div className="bg-alt flex h-14 w-full items-center justify-between rounded-[.625rem] px-6 text-base font-bold text-heading">
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
      <button
        type="button"
        className="mt-4 flex h-14 w-full items-center justify-center gap-4 rounded-[.625rem] bg-accent fill-base font-bold text-heading"
      >
        <IconCart />
        Add to cart
      </button>
    </section>
  )
}
export default TextContent
