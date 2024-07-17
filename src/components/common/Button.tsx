import { twMerge } from 'tailwind-merge'

function Button({ children, className = '', handleClick }: Props) {
  return (
    <button
      type="button"
      className={twMerge(
        'h-14 w-full rounded-[.625rem] bg-accent font-bold text-heading transition-colors',
        'hover:bg-accent-hover focus-visible:bg-accent-hover focus-visible:outline-none',
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
export default Button

type Props = {
  children: React.ReactNode
  handleClick: () => void
  className?: string
}
