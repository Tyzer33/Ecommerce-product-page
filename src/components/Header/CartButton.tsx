import { twJoin } from 'tailwind-merge'
import IconCart from './IconCart'

function CartButton() {
  const itemsInCart = 0
  const cartOpen = false
  const active = cartOpen || itemsInCart > 0

  return (
    <button
      type="button"
      className={twJoin(
        'relative ml-auto',
        active ? 'fill-active' : 'fill-base',
        'hover:fill-active focus:fill-active focus:outline-none',
      )}
      onClick={() => console.log('toggle cart')}
      aria-label="Toggle cart"
    >
      <IconCart />
      {itemsInCart > 0 && (
        <div className="absolute -right-[6px] -top-[6px] flex h-[.8125rem] w-[1.1875rem] items-center justify-center rounded-xl bg-accent text-[.625rem]/[.75rem] font-bold text-white">
          {itemsInCart}
        </div>
      )}
    </button>
  )
}
export default CartButton
