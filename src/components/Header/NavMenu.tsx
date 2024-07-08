import { useEffect, useRef } from 'react'
import NavLinks from './NavLinks'
import IconClose from '../MainContent/ProductImages/IconClose'
import { getRootVariable, isMsString, msStringToNum } from '@/utils/functions'

function NavMenu({ closeMenu }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.querySelector('#root') as HTMLElement

    root.setAttribute('inert', 'true')
    document.body.style.overflow = 'hidden'
    return () => {
      root.removeAttribute('inert')
      document.body.style.overflow = 'auto'
    }
  }, [])

  function animateClose() {
    const durationStr = getRootVariable('--menu-animation-duration')
    const durationNum = isMsString(durationStr) ? msStringToNum(durationStr) : 0

    wrapperRef.current?.classList.add('animate-fade-out')
    menuRef.current?.classList.add('animate-slide-out-l')
    setTimeout(closeMenu, durationNum)
  }

  return (
    <div ref={wrapperRef} className="animate-fade-in fixed inset-0 bg-black/50">
      <section
        ref={menuRef}
        className="animate-slide-in-l absolute inset-0 right-auto w-60 space-y-12 bg-main p-6"
      >
        <button
          className="block fill-current"
          type="button"
          onClick={animateClose}
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
