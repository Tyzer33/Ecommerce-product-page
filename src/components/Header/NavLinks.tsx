import { twJoin } from 'tailwind-merge'

/* eslint-disable jsx-a11y/anchor-is-valid */
function NavLinks({ type }: Props) {
  return (
    <ul
      className={twJoin(
        type === 'menu' && `space-y-[1.125rem] text-lg font-bold`,
      )}
    >
      <li>
        <a href="#">Collections</a>
      </li>
      <li>
        <a href="#">Men</a>
      </li>
      <li>
        <a href="#">Women</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  )
}
export default NavLinks

type Props = {
  type: 'menu' | 'header'
}
