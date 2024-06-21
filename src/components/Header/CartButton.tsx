import IconCart from './IconCart'

function CartButton() {
  return (
    <button
      type="button"
      className="relative ml-auto"
      onClick={() => console.log('toggle cart')}
      aria-label="Toggle cart"
    >
      <IconCart />
    </button>
  )
}
export default CartButton
