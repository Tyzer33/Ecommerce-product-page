import { twJoin } from 'tailwind-merge'
import avatar from '@/assets/image-avatar.png'

function UserAvatarButton() {
  return (
    <button
      type="button"
      className={twJoin(
        'ml-[1.375rem] rounded-full transition-[outline] lg:ml-[2.875rem]',
        'outline outline-2 -outline-offset-2 outline-transparent',
        'hover:outline-accent focus-visible:outline-accent',
      )}
    >
      <img
        className="aspect-square w-6 lg:w-[3.125rem]"
        src={avatar}
        alt="User avatar"
      />
    </button>
  )
}
export default UserAvatarButton
