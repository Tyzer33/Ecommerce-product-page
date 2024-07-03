import { twMerge } from 'tailwind-merge'
import iconDelete from '../../assets/icon-delete.svg'
import productImage from '../../assets/image-product-1-thumbnail.jpg'

function Cart() {
  const empty = true

  return (
    <section
      className={twMerge(
        'mx-auto flex w-screen max-w-[22.5rem] flex-col overflow-hidden rounded-xl bg-main shadow-2xl',
        'absolute z-50',
        'left-0 right-0 top-[4.75rem]',
        'cart-md:left-auto cart-md:right-0 cart-md:top-[3.375rem]',
        'lg:left-1/2 lg:top-[3.125rem] lg:-translate-x-1/2',
      )}
    >
      <header className="border-b-1 border-main p-6 pt-4 font-bold text-heading">
        Cart
      </header>
      {empty ? (
        <div className="flex min-h-[11.75rem] items-center justify-center font-bold">
          Your cart is empty.
        </div>
      ) : (
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
      )}
    </section>
  )
}
export default Cart
