import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import NavMenu from './NavMenu'
import IconMenu from './IconMenu'

function NavMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="mr-4 fill-current"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <IconMenu />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {createPortal(
              <NavMenu closeMenu={() => setIsMenuOpen(false)} />,
              document.body,
            )}
          </>
        )}
      </AnimatePresence>
    </>
  )
}
export default NavMenuButton
