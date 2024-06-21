import iconClose from '../../assets/icon-close.svg'
import NavLinks from './NavLinks'

function NavMenu({ closeMenu }: Props) {
  return (
    <div className="absolute inset-0 bg-black/50">
      <section className="absolute inset-0 right-auto w-60 space-y-12 bg-main p-6">
        <button type="button" onClick={closeMenu}>
          <img src={iconClose} alt="Close menu" />
        </button>
        <NavLinks type="menu" />
      </section>
    </div>
  )
}
export default NavMenu

type Props = {
  closeMenu: () => void
}
