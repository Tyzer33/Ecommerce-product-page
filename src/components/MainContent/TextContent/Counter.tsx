import { twJoin } from 'tailwind-merge'
import IconMinus from './IconMinus'
import IconPlus from './IconPlus'

function Counter({ quantity, add, reduce }: Props) {
  return (
    <div className="flex h-14 w-full min-w-28 items-center justify-between overflow-hidden rounded-[.625rem] bg-alt text-base font-bold text-heading lg:flex-[2]">
      <button
        type="button"
        className={twJoin(
          'flex h-full items-center justify-center rounded-none fill-accent px-6 transition-colors lg:px-4',
          'hover:fill-accent-hover focus-visible:bg-black/5 focus-visible:fill-accent-hover focus-visible:outline-none',
        )}
        onClick={reduce}
        aria-label="minus"
      >
        <IconMinus />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        className={twJoin(
          'flex h-full items-center justify-center rounded-none fill-accent px-6 transition-colors lg:px-4',
          'hover:fill-accent-hover focus-visible:bg-black/5 focus-visible:fill-accent-hover focus-visible:outline-none',
        )}
        onClick={add}
        aria-label="plus"
      >
        <IconPlus />
      </button>
    </div>
  )
}
export default Counter

type Props = {
  quantity: number
  add: () => void
  reduce: () => void
}
