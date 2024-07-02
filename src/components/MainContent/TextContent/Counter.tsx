import { useState } from 'react'
import IconMinus from './IconMinus'
import IconPlus from './IconPlus'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-14 w-full items-center justify-between rounded-[.625rem] bg-alt px-6 text-base font-bold text-heading lg:flex-[2]">
      <button
        type="button"
        className="aspect-square fill-accent transition-colors hover:fill-accent-hover"
        onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
        aria-label="minus"
      >
        <IconMinus />
      </button>
      <span>{count}</span>
      <button
        type="button"
        className="aspect-square fill-accent transition-colors hover:fill-accent-hover"
        onClick={() => setCount((prev) => prev + 1)}
        aria-label="plus"
      >
        <IconPlus />
      </button>
    </div>
  )
}
export default Counter
