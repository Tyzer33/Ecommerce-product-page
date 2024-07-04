import IconMinus from './IconMinus'
import IconPlus from './IconPlus'

function Counter({ quantity, add, reduce }: Props) {
  return (
    <div className="flex h-14 w-full min-w-28 items-center justify-between rounded-[.625rem] bg-alt text-base font-bold text-heading lg:flex-[2]">
      <button
        type="button"
        className="flex h-full items-center justify-center fill-accent px-6 transition-colors hover:fill-accent-hover lg:px-4"
        onClick={reduce}
        aria-label="minus"
      >
        <IconMinus />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        className="flex h-full items-center justify-center fill-accent px-6 transition-colors hover:fill-accent-hover lg:px-4"
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
