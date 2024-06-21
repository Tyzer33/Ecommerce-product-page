import logo from '../../assets/logo.svg'
import avatar from '../../assets/image-avatar.png'
import iconCart from '../../assets/icon-cart.svg'
import iconMenu from '../../assets/icon-menu.svg'

function Header() {
  return (
    <header className="flex items-center px-6 pb-6 pt-5">
      <button
        type="button"
        className="mr-4"
        onClick={() => console.log('open menu')}
        aria-label="Open menu"
      >
        <img src={iconMenu} alt="Menu icon" />
      </button>
      <img src={logo} alt="Company logo" />
      <button
        type="button"
        className="relative ml-auto"
        onClick={() => console.log('toggle cart')}
        aria-label="Toggle cart"
      >
        <img src={iconCart} alt="Cart icon" />
      </button>
      <img
        className="ml-[1.375rem] aspect-square w-6 cursor-pointer rounded-full"
        src={avatar}
        alt="User avatar"
      />
    </header>
  )
}
export default Header
