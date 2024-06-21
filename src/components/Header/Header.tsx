import logo from '../../assets/logo.svg'
import avatar from '../../assets/image-avatar.png'
import NavMenuButton from './NavMenuButton'
import CartButton from './CartButton'
import useBreakpoint from '../../utils/useBreakpoint'
import NavLinks from './NavLinks'

function Header() {
  const { isBelowLg, isAboveLg } = useBreakpoint('lg')

  return (
    <header className="lg:border-main lg:border-b-1 flex items-center px-6 pb-6 pt-5">
      {isBelowLg && <NavMenuButton />}
      <img src={logo} alt="Company logo" />
      {isAboveLg && <NavLinks type="header" />}
      <CartButton />
      <img
        className="ml-[1.375rem] aspect-square w-6 cursor-pointer rounded-full lg:ml-[2.875rem] lg:w-[3.125rem]"
        src={avatar}
        alt="User avatar"
      />
    </header>
  )
}
export default Header
