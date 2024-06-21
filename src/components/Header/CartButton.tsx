import IconCart from './IconCart'

function CartButton() {
  const itemsInCart = 0
  const cartOpen = false

  return (
    <button
      type="button"
      className="relative ml-auto"
      onClick={() => console.log('toggle cart')}
      aria-label="Toggle cart"
    >
      <IconCart active={cartOpen || itemsInCart > 0} />
      {itemsInCart > 0 && (
        <div className="absolute -right-[6px] -top-[6px] flex h-[.8125rem] w-[1.1875rem] items-center justify-center rounded-xl bg-accent text-[.625rem]/[.75rem] text-white">
          {itemsInCart}
        </div>
      )}
    </button>
  )
}
export default CartButton
