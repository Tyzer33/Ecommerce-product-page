import IconCart from '../../common/IconCart'

function AddToCart() {
  return (
    <button
      type="button"
      className="flex h-14 w-full items-center justify-center gap-4 rounded-[.625rem] bg-accent fill-current font-bold text-heading transition-colors hover:bg-accent-hover lg:flex-[5]"
    >
      <IconCart size="small" />
      Add to cart
    </button>
  )
}
export default AddToCart
