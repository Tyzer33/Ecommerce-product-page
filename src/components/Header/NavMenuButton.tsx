import iconMenu from '../../assets/icon-menu.svg'
function NavMenuButton() {
  return (
      <button
        type="button"
        className="mr-4"
        onClick={() => console.log('open menu')}
        aria-label="Open menu"
      >
        <img src={iconMenu} alt="Menu icon" />
      </button>
  )
}
export default NavMenuButton
