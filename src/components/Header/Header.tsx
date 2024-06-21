import logo from '../../assets/logo.svg'
import avatar from '../../assets/image-avatar.png'
import NavMenuButton from './NavMenuButton'
import CartButton from './CartButton'
import useBreakpoint from '../../utils/useBreakpoint'
import NavLinks from './NavLinks'

function Header() {
  const { isBelowLg, isAboveLg } = useBreakpoint('lg')

  return (
    <header className="lg:border-main lg:border-b-1 flex items-center px-6 pb-6 pt-5 lg:pb-[2.125rem] lg:pt-7">
      {isBelowLg && <NavMenuButton />}
      <img src={logo} alt="Company logo" />
      {isAboveLg && <NavLinks type="header" />}
      <CartButton />
      <button
        type="button"
        className="hover:outline-accent ml-[1.375rem] rounded-full hover:outline hover:outline-2 hover:-outline-offset-2 lg:ml-[2.875rem]"
      >
        <img
          className="aspect-square w-6 lg:w-[3.125rem]"
          src={avatar}
          alt="User avatar"
        />
      </button>
    </header>
  )
}
export default Header
