function IconArrow({ children, displayContext }: IconArrowProps) {
  const isMobile = displayContext === 'mobile'

  return (
    <svg
      className={isMobile ? 'h-[.875rem] stroke-[3]' : 'h-5 stroke-2'}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  )
}

export function IconPrev({ displayContext }: Props) {
  return (
    <IconArrow displayContext={displayContext}>
      <path d="M8.62012 12.6L3.08166 6.99998L8.62012 1.39998" />
    </IconArrow>
  )
}

export function IconNext({ displayContext }: Props) {
  return (
    <IconArrow displayContext={displayContext}>
      <path d="M3.37988 1.40002L8.91834 7.00002L3.37988 12.6" />
    </IconArrow>
  )
}

type Props = {
  displayContext: 'mobile' | 'lightbox'
}

type IconArrowProps = {
  children: React.ReactNode
} & Props
