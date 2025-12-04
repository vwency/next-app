export interface MainMenuProps {
  contentRef?: React.RefObject<HTMLDivElement | null>
  menuListRef?: React.RefObject<HTMLUListElement | null>
  isOpen: boolean
  toggleMenu: () => void
}
