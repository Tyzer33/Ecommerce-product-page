function IconClose({ size }: Props) {
  return (
    <svg
      className={
        size === 'small' ? 'h-[.9375rem] w-[14px]' : 'h-6 w-[1.375rem]'
      }
      viewBox="0 0 22 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8413 2L21 5.15868L14.1557 11.9985L20.9985 18.8413L17.8398 22L11 15.1557L4.16017 21.9985L1.00149 18.8398L7.84132 12L1 5.15868L4.15868 2L10.9985 8.84132L17.8413 2Z"
      />
    </svg>
  )
}
export default IconClose

type Props = {
  size: 'small' | 'large'
}
