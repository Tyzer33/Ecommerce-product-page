import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import NavLinks from './NavLinks'
import IconClose from '../MainContent/ProductImages/IconClose'

function NavMenu({ closeMenu }: Props) {
  const shouldReduceMotion = useReducedMotion()

  const defaultTransition = {
    type: 'linear',
    duration: 0.3,
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const menuVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { x: '-100%' },
    visible: shouldReduceMotion ? { opacity: 1 } : { x: 0 },
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
    <div className="fixed inset-0">
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={defaultTransition}
        className="bg-overlay absolute inset-0"
      />
      <motion.section
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
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
    </div>
  )
}
export default NavMenu

type Props = {
  closeMenu: () => void
}
