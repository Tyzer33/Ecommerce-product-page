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
    </button>
  )
}
export default CartButton
