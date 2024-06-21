import logo from '../../assets/logo.svg'
import avatar from '../../assets/image-avatar.png'
import NavMenuButton from './NavMenuButton'
import CartButton from './CartButton'

function Header() {
  return (
    <header className="flex items-center px-6 pb-6 pt-5">
      <NavMenuButton />
      <img src={logo} alt="Company logo" />
      <CartButton />
      <img
        className="ml-[1.375rem] aspect-square w-6 cursor-pointer rounded-full"
        src={avatar}
        alt="User avatar"
      />
    </header>
  )
}
export default Header
