import iconDelete from '../../../assets/icon-delete.svg'
import productImage from '../../../assets/image-product-1-thumbnail.jpg'

function CartItem() {
  return (
    <div className="space-y-[1.625rem] p-6 pb-8">
      <div className="flex items-center gap-4">
        <img
          className="aspect-square h-[3.125rem] rounded-[.25rem]"
          src={productImage}
          alt="Product"
        />
        <div className="flex-1">
          <p>Fall Limited Edition Sneakers</p>
          <div className="flex gap-[.375rem]">
            <p>$125.00 x 3</p>
            <p className="font-bold text-heading">$375.00</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => console.log('Delete')}
          aria-label="delete"
        >
          <img src={iconDelete} alt="Delete Icon" />
        </button>
      </div>
      <button
        type="button"
        className="h-14 w-full rounded-[.625rem] bg-accent font-bold text-heading"
        onClick={() => console.log('Checkout')}
      >
        Checkout
      </button>
    </div>
  )
}
export default CartItem
