import { useEffect } from 'react'
import NavLinks from './NavLinks'
import IconClose from '../MainContent/ProductImages/IconClose'

function NavMenu({ closeMenu }: Props) {
  useEffect(() => {
    const root = document.querySelector('#root') as HTMLElement

    root.setAttribute('inert', 'true')
    document.body.style.overflow = 'hidden'
    return () => {
      root.removeAttribute('inert')
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/50">
      <section className="absolute inset-0 right-auto w-60 space-y-12 bg-main p-6">
        <button
          className="block fill-current"
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <IconClose size="small" />
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
