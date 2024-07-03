import IconMinus from './IconMinus'
import IconPlus from './IconPlus'

function Counter({ quantity, add, reduce }: Props) {
  return (
    <div className="flex h-14 w-full items-center justify-between rounded-[.625rem] bg-alt px-6 text-base font-bold text-heading lg:flex-[2]">
      <button
        type="button"
        className="aspect-square fill-accent transition-colors hover:fill-accent-hover"
        onClick={reduce}
        aria-label="minus"
      >
        <IconMinus />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        className="aspect-square fill-accent transition-colors hover:fill-accent-hover"
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
