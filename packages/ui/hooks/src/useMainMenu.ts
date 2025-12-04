import { useState, useRef, useEffect } from 'react'

export const useMainMenu = (
  contentRef?: React.RefObject<HTMLDivElement | null>
) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const menuListRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (contentRef?.current) {
      if (isOpen) {
        requestAnimationFrame(() => {
          const listInline = document.querySelector(
            '[class*="listInline"][class*="active"]'
          )

          if (listInline) {
            const listHeight = listInline.scrollHeight
            const computedStyle = window.getComputedStyle(listInline)
            const paddingTop = parseFloat(computedStyle.paddingTop)
            const paddingBottom = parseFloat(computedStyle.paddingBottom)
            const totalHeight = listHeight + paddingTop + paddingBottom

            contentRef.current!.style.marginTop = `${totalHeight}px`
            contentRef.current!.style.transition = 'margin-top 0.3s ease'
          }
        })
      } else {
        contentRef.current.style.marginTop = '0px'
        contentRef.current.style.transition = 'margin-top 0.3s ease'
      }
    }
  }, [isOpen, contentRef])

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return {
    isOpen,
    toggleMenu,
    menuRef,
    menuListRef,
  }
}
