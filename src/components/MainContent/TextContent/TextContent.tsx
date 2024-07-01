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
    <section className="max-lg:m-6 lg:mt-[clamp(0rem,-18.5421rem+28.972vi,3.875rem)] lg:max-w-[27.75rem] lg:flex-1">
      <h2>{brand}</h2>
      <h1 className="mb-4 mt-3 lg:mb-9 lg:mt-5">{name}</h1>
      <p>{desc}</p>
      <div className="my-6 max-lg:flex max-lg:items-center max-lg:justify-between lg:mb-8 lg:space-y-3">
        <div className="flex items-end gap-4">
          <span className="text-[1.75rem]/[2rem] font-bold tracking-[0.035em] text-heading">
            {formatter.format(price * discount)}
          </span>
          <span className="rounded-md bg-badge px-[.625rem] py-1 text-base/5 font-bold text-badge">
            {discount * 100}%
          </span>
        </div>
        <span className="block font-bold tracking-[0.02em] line-through">
          {formatter.format(price)}
        </span>
      </div>
      <div className="flex gap-4 max-lg:flex-col">
        <div className="flex h-14 w-full items-center justify-between rounded-[.625rem] bg-alt px-6 text-base font-bold text-heading lg:flex-[2]">
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
          className="flex h-14 w-full items-center justify-center gap-4 rounded-[.625rem] bg-accent fill-base font-bold text-heading lg:flex-[5]"
        >
          <IconCart size="small" />
          Add to cart
        </button>
      </div>
    </section>
  )
}
export default TextContent
