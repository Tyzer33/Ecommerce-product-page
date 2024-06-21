import { useState } from 'react'
import { createPortal } from 'react-dom'
import iconMenu from '../../assets/icon-menu.svg'
import NavMenu from './NavMenu'

function NavMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="mr-4"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <img src={iconMenu} alt="Menu icon" />
      </button>
      {isMenuOpen &&
        createPortal(
          <NavMenu closeMenu={() => setIsMenuOpen(false)} />,
          document.body,
        )}
    </>
  )
}
export default NavMenuButton
