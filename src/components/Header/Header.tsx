import logo from '../../assets/logo.svg'
import NavMenuButton from './NavMenuButton'
import CartButton from './CartButton'
import useBreakpoint from '../../utils/useBreakpoint'
import NavLinks from './NavLinks'
import UserAvatarButton from './UserAvatarButton'

function Header() {
  const { isBelowLg, isAboveLg } = useBreakpoint('lg')

  return (
    <header className="flex items-center px-6 pb-6 pt-5 lg:border-b-1 lg:border-main lg:pb-[2.125rem] lg:pt-7">
      {isBelowLg && <NavMenuButton />}
      <img src={logo} alt="Company logo" />
      {isAboveLg && <NavLinks type="header" />}
      <CartButton />
      <UserAvatarButton />
    </header>
  )
}
export default Header
