import { twJoin } from 'tailwind-merge'

const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact']

/* eslint-disable jsx-a11y/anchor-is-valid */
function NavLinks({ type }: Props) {
  return (
    <ul
      className={twJoin(
        type === 'menu' && `space-y-[1.125rem] text-lg font-bold text-heading`,
        type === 'header' &&
          `relative ml-14 flex gap-8 self-stretch text-[.9375rem]`,
      )}
    >
      {navLinks.map((link) => (
        <li key={link}>
          <a
            href="#"
            className={twJoin(
              type === 'header' &&
                'relative flex h-full items-center transition-colors hover:text-heading focus:outline-none focus-visible:text-heading',
              type === 'header' &&
                'expand-click-t-[1.75rem] expand-click-x-md expand-click-b-[2.125rem]',
              type === 'header' &&
                'after:absolute after:inset-0 after:-bottom-[2.125rem] after:top-auto after:h-1 after:transition-colors hover:after:bg-accent focus-visible:after:bg-accent',
            )}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default NavLinks

type Props = {
  type: 'menu' | 'header'
}
