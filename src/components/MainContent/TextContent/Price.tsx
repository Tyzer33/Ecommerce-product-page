import product from '../../../data/products'
import formatter from '../../../utils/formatter'

function Price() {
  const { price, discount } = product

  return (
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
  )
}
export default Price
