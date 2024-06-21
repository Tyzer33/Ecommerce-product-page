import { twJoin } from 'tailwind-merge'

const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact']

/* eslint-disable jsx-a11y/anchor-is-valid */
function NavLinks({ type }: Props) {
  return (
    <ul
      className={twJoin(
        type === 'menu' && `space-y-[1.125rem] text-lg font-bold`,
        type === 'header' && `ml-14 flex gap-8 text-[.9375rem] text-body`,
      )}
    >
      {navLinks.map((link) => (
        <li key={link}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  )
}
export default NavLinks

type Props = {
  type: 'menu' | 'header'
}
