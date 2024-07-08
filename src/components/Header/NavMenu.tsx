import { useEffect } from 'react'
import { motion } from 'framer-motion'
import NavLinks from './NavLinks'
import IconClose from '../MainContent/ProductImages/IconClose'

function NavMenu({ closeMenu }: Props) {
  const defaultTransition = {
    type: 'linear',
    duration: 0.3,
  }

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
    <motion.div
      initial={{ backgroundColor: 'hsla(0,0,0,0)' }}
      animate={{ backgroundColor: 'hsla(0,0,0,0.75)' }}
      exit={{ backgroundColor: 'hsla(0,0,0,0)' }}
      transition={defaultTransition}
      className="fixed inset-0 bg-black/50"
    >
      <motion.section
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={defaultTransition}
        className="absolute inset-0 right-auto w-60 space-y-12 bg-main p-6"
      >
        <button
          className="block fill-current"
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <IconClose size="small" />
        </button>
        <NavLinks type="menu" />
      </motion.section>
    </motion.div>
  )
}
export default NavMenu

type Props = {
  closeMenu: () => void
}
