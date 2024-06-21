import iconCart from '../../assets/icon-cart.svg'

function CartButton() {
  return (
    <button
      type="button"
      className="relative ml-auto"
      onClick={() => console.log('toggle cart')}
      aria-label="Toggle cart"
    >
      <img src={iconCart} alt="Cart icon" />
    </button>
  )
}
export default CartButton
